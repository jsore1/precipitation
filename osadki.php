<?php
/**
 * Класс для подключения к базе
 */
class DataBase {
    /**
     * Конструктор класса
     * $dbName - имя базы,
     * $host - хост,
     * $login - логин пользователя,
     * $password - пароль пользователя
     */
    public function __construct($dbName, $host, $login, $password) {
        $this->dbName = $dbName;
        $this->host = $host;
        $this->login = $login;
        $this->password = $password;
    }
    // Метод подключения к базе
    private function connect() {
        try {
            return $pdo = new PDO(
                'mysql:dbname='.$this->dbName.';host='.$this->host,
                $this->login,
                $this->password,
                array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'")
            );
        } catch (PDOException $e) {
            return die($e->getMessage());
        }
    }
    /**
     * Метод select($pdo, $datePeriodStart, $datePeriodEnd)
     * $numberPk - номер осадкомера
     * $datePeriodStart - время с которого начинаем выбирать данные из базы
     * $datePeriodEnd - время до которого выбираем данные из базы
     * Возвращает двумерный массив с данными времени и осадков $array[0..n][0..n]
     */
    public function select($numberPk, $datePeriodStart, $datePeriodEnd) {
        $dbh = $this->connect();
        $sth = $dbh->prepare("SELECT * FROM `db_osadki` WHERE `number_pk` = '$numberPk' AND `date` BETWEEN '$datePeriodStart' AND '$datePeriodEnd'");
        $sth->execute();
        $arr = $sth->fetchAll(PDO::FETCH_ASSOC);
        $arrGaugeDate = [];
        $arrGaugeTime = [];
        $arrGaugeValue = [];
        $arrGauge = [];
        for ($i = 0, $len = count($arr); $i < $len; $i++) {
            array_push($arrGaugeDate, $arr[$i]['date']);
            array_push($arrGaugeTime, $arr[$i]['time']);
            array_push($arrGaugeValue, $arr[$i]['value']);
        }
        array_push($arrGauge, $arrGaugeDate);
        array_push($arrGauge, $arrGaugeTime);
        array_push($arrGauge, $arrGaugeValue);
        return $arrGauge;
    }
}

/**
 *
 */
class Gauge {
    public function __construct($id, $date, $time, $value, $dateTimeBegin, $dateTimeEnd) {
        $this->id = $id;
        $this->date = $date;
        $this->time = $time;
        $this->value = $value;
        $this->dateTimeBegin = $dateTimeBegin;
        $this->dateTimeEnd = $dateTimeEnd;
    }
    // Метод конвентирующий массив времени в unix формат
    private function allConvertToUnixTime() {
        $arrTime = [];
        for ($i = 0, $len  = count($this->date); $i < $len; $i++) {
            $year = substr($this->date[$i], 0, 4);
            $month = substr($this->date[$i], 5, 2);
            $day = substr($this->date[$i], 8, 2);
            $hour = substr($this->time[$i], 0, 2);
            $minute = substr($this->time[$i], 3, 2);
            $second = substr($this->time[$i], 6, 2);
            $arrTime[$i] = mktime($hour, $minute, $second, $month, $day, $year);
        }
        return $arrTime;
    }
    // Метод, который создает массив со всем временем (Эталон)
    private function createAllTime() {
        $yearBegin = substr($this->dateTimeBegin, 0, 4);
        $monthBegin = substr($this->dateTimeBegin, 5, 2);
        $dayBegin = substr($this->dateTimeBegin, 8, 2);
        $yearEnd = substr($this->dateTimeEnd, 0, 4);
        $monthEnd = substr($this->dateTimeEnd, 5, 2);
        $dayEnd = substr($this->dateTimeEnd, 8, 2);
        $unixTimeBegin = mktime(0, 0, 0, $monthBegin, $dayBegin, $yearBegin);
        $unixTimeEnd = mktime(23, 55, 0, $monthEnd, $dayEnd, $yearEnd);
        $arrTime = [];
        while ($unixTimeBegin <= $unixTimeEnd) {
            array_push($arrTime, $unixTimeBegin);
            $unixTimeBegin += 300;
        }
        return $arrTime;
        //$newDate = date("Y-m-d H:i:s", $unixTime);
        //echo $newDate;
    }
    // Метод, который создает новый массив с заполненными пропущенными данными
    private function selectValues() {
        $arrayTime = $this->allConvertToUnixTime();
        $arrayFullTime = $this->createAllTime();
        $newArrayTime = [];
        $newArrayValue = [];
        $count = 0;
        for ($i  = 0, $len = count($arrayFullTime); $i < $len; $i++) {
            if ($arrayTime[$i - $count] == $arrayFullTime[$i]) {
                array_push($newArrayTime, $arrayFullTime[$i]);
                array_push($newArrayValue, $this->value[$i - $count]);
            } else {
                $count  += 1;
                array_push($newArrayTime, $arrayFullTime[$i]);
                array_push($newArrayValue, 10000);
            }
        }
        $newArray = [];
        array_push($newArray, $newArrayTime);
        array_push($newArray, $newArrayValue);
        //echo $count;
        //echo count($arrayTime);
        //echo '<br>';
        //echo count($arrayFullTime);
        //echo '<br>';
        return $newArray;
    }
    // Метод расчета суммы, возвращает двумерный массив с диапазонами и суммами
    public function calculateSum() {
        $arrayValues = $this->selectValues();
        $arraySum = [];
        $arrayRange = [];
        $arrayAll = [];
        $sum = 0;
        for ($i = -1, $len = count($arrayValues[0]) - 5; $i < $len; $i++) {
            for ($j = $i + 1, $len2 = $i + 4; $j <= $len2; $j++) {
                if ($j == $len2) {
                    $sum += $arrayValues[1][$j];
                    array_push($arraySum, $sum);
                    $sum = 0;
                    $dateTempBegin = date("Y-m-d H:i", $arrayValues[0][$j - 3]);
                    $dateTempEnd = date("Y-m-d H:i", $arrayValues[0][$j + 1]);
                    $yearBegin = substr($dateTempBegin, 2, 2);
                    $monthBegin = substr($dateTempBegin, 5, 3);
                    $dayBegin = substr($dateTempBegin, 8, 2);
                    $timeBegin = substr($dateTempBegin, 10, 6);
                    $yearEnd = substr($dateTempEnd, 2, 2);
                    $monthEnd = substr($dateTempEnd, 5, 3);
                    $dayEnd = substr($dateTempEnd, 8, 2);
                    $timeEnd = substr($dateTempEnd, 10, 6);

                    array_push($arrayRange, $dayBegin.'-'.$monthBegin.$yearBegin.$timeBegin.' - '.$dayEnd.'-'.$monthEnd.$yearEnd.$timeEnd);
                } else {
                    $sum += $arrayValues[1][$j];
                }
            }
        }
        array_push($arrayAll, $arrayRange);
        array_push($arrayAll, $arraySum);
        return $arrayAll;
    }
    // Вывод данных
    public function filterSum($arr, $limitValue) {
        $arrSum = [];
        $arrRange = [];
        $arrAll = [];
        for ($i = 0, $len = count($arr[0]); $i < $len; $i++) {
            if ($arr[1][$i] != 0 and $arr[1][$i] > $limitValue) {
                array_push($arrSum, $arr[1][$i]);
                array_push($arrRange, $arr[0][$i]);
            }
        }
        array_push($arrAll, $arrRange);
        array_push($arrAll, $arrSum);
        return $arrAll;
    }
}
// Создаем объект типа DataBase с настройками нашей базы
$dataBase = new DataBase('test', 'osadki.my', 'phpmyadmin', '12345678');

// Принимаем post запросом период времени со странички
$dateTimeBegin = htmlentities($_POST['date-time-begin']);
// $dateTimeBegin = '2018-05-01';
$dateTimeEnd = htmlentities($_POST['date-time-end']);
// $dateTimeEnd = '2018-05-05';
$limitValue = htmlentities($_POST['form-limit']);
// $limitValue = 1.1;

$arrayNew = [];
$newArray = [];

for ($i = 1001; $i <= 1035; $i++) {
    if ($i != 1033) {
        $numberPk = $i;
        $arrayGauge = $dataBase->select(
            $numberPk,
            $dateTimeBegin,
            $dateTimeEnd
        );

        if (count($arrayGauge[1]) != 0) {
            $gauge = new Gauge($numberPk, $arrayGauge[0], $arrayGauge[1], $arrayGauge[2], $dateTimeBegin, $dateTimeEnd);

            $arraySum = $gauge->calculateSum();
            $arrayFilt = $gauge->filterSum($arraySum, $limitValue);

            $arrayNew["gauge"] = $numberPk;
            $arrayNew["arrayRange"] = $arrayFilt[0];
            $arrayNew["arrayValue"] = $arrayFilt[1];

            array_push($newArray, $arrayNew);


        }
    }
}
echo json_encode(json_encode($newArray));
