class Gauges {
    async getResult() {
        const formData = new FormData(document.forms.form);

        try {
            const res = await axios({
                method: 'post',
                url: '/osadki.php',
                data: formData,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            });
            this.result = JSON.parse(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    createTables() {
        let tableString;
        tableString = ``;
        if (this.result.length !== 0) {
            for (let j = 1001; j < 1036; j++) {
                let gauges;
                switch (j) {
                    case 1001:
                        gauges = this.result.gauge_1001;
                        break;
                    case 1002:
                        gauges = this.result.gauge_1002;
                        break;
                    case 1003:
                        gauges = this.result.gauge_1003;
                        break;
                    case 1004:
                        gauges = this.result.gauge_1004;
                        break;
                    case 1005:
                        gauges = this.result.gauge_1005;
                        break;
                    case 1006:
                        gauges = this.result.gauge_1006;
                        break;
                    case 1007:
                        gauges = this.result.gauge_1007;
                        break;
                    case 1008:
                        gauges = this.result.gauge_1008;
                        break;
                    case 1009:
                        gauges = this.result.gauge_1009;
                        break;
                    case 1010:
                        gauges = this.result.gauge_1010;
                        break;
                    case 1011:
                        gauges = this.result.gauge_1011;
                        break;
                    case 1012:
                        gauges = this.result.gauge_1012;
                        break;
                    case 1013:
                        gauges = this.result.gauge_1013;
                        break;
                    case 1014:
                        gauges = this.result.gauge_1014;
                        break;
                    case 1015:
                        gauges = this.result.gauge_1015;
                        break;
                    case 1016:
                        gauges = this.result.gauge_1016;
                        break;
                    case 1017:
                        gauges = this.result.gauge_1017;
                        break;
                    case 1018:
                        gauges = this.result.gauge_1018;
                        break;
                    case 1019:
                        gauges = this.result.gauge_1019;
                        break;
                    case 1020:
                        gauges = this.result.gauge_1020;
                        break;
                    case 1021:
                        gauges = this.result.gauge_1021;
                        break;
                    case 1022:
                        gauges = this.result.gauge_1022;
                        break;
                    case 1023:
                        gauges = this.result.gauge_1023;
                        break;
                    case 1024:
                        gauges = this.result.gauge_1024;
                        break;
                    case 1025:
                        gauges = this.result.gauge_1025;
                        break;
                    case 106:
                        gauges = this.result.gauge_1026;
                        break;
                    case 1027:
                        gauges = this.result.gauge_1027;
                        break;
                    case 1028:
                        gauges = this.result.gauge_1028;
                        break;
                    case 1029:
                        gauges = this.result.gauge_1029;
                        break;
                    case 1030:
                        gauges = this.result.gauge_1030;
                        break;
                    case 1031:
                        gauges = this.result.gauge_1031;
                        break;
                    case 1032:
                        gauges = this.result.gauge_1032;
                        break;
                    case 1034:
                        gauges = this.result.gauge_1034;
                        break;
                    case 1035:
                        gauges = this.result.gauge_1035;
                        break;
                    default:
                        continue;
                }
                if (typeof gauges !== "undefined") {
                    if (gauges[1].length !== 0) {
                        tableString += `
                        <table class="gauge-${j}">
                            <caption>Таблица</caption>
                            <tr>
                                <td>Диапазон времени</td>
                                <td>Значение</td>
                            </tr>
                        `;
                        for (let i = 0; i < gauges[1].length; i++) {
                            if (gauges[1][i] < 9000) {
                                tableString += `
                                <tr>
                                    <td>${gauges[0][i]}</td>
                                    <td>${gauges[1][i]}</td>
                                </tr>
                                `;
                            }
                        }
                        tableString += `</table>`;
                    }
                }
            }
            tableString += `
            <b class="info">Выберите пункт, для которого нужно отобразить значения</b>
            `;
            return tableString;
        } else {
            return tableString += `<b>За этот период нет данных</b>`;
        }
    }

    createMenu() {
        let menuString;
        menuString = ``;
        if (this.result.length !== 0) {
            if (typeof this.result.gauge_1001 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1001');">КНС Комендантский аэродром</a></li>
                `;
            }
            if (typeof this.result.gauge_1002 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1002');">Северная станция аэрации</a></li>
                `;
            }
            if (typeof this.result.gauge_1003 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1003');">КОС Кронштадт</a></li>
                `;
            }
            if (typeof this.result.gauge_1004 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1004');">ВНС Песочная</a></li>
                `;
            }
            if (typeof this.result.gauge_1005 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1005');">ВНС Парнас</a></li>
                `;
            }
            if (typeof this.result.gauge_1006 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1006');">ВНС Ломоносов</a></li>
                `;
            }
            if (typeof this.result.gauge_1007 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1007');">ВНС Заячий Ремиз</a></li>
                `;
            }
            if (typeof this.result.gauge_1008 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1008');">Красносельская станция аэрации</a></li>
                `;
            }
            if (typeof this.result.gauge_1009 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1009');">Юго-Западные очистные сооружения</a></li>
                `;
            }
            if (typeof this.result.gauge_1010 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1010');">ВС Колпинская</a></li>
                `;
            }
            if (typeof this.result.gauge_1011 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1011');">ВНС 4-й подъем</a></li>
                `;
            }
            if (typeof this.result.gauge_1012 !== "undefined") {
                 menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1012');">КНС Московская славянка</a></li>
                `;
            }
            if (typeof this.result.gauge_1013 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1013');">КОС Пушкин</a></li>
                `;
            }
            if (typeof this.result.gauge_1014 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1014');">Северная ВС</a></li>
                `;
            }
            if (typeof this.result.gauge_1015 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1015');">Главная водопроводная станция 2П</a></li>
                `;
            }
            if (typeof this.result.gauge_1016 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1016');">ВС Дудерговская</a></li>
                `;
            }
            if (typeof this.result.gauge_1017 !== "undefined") {
                   menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1017');">Стационарный снегоплавильный пункт</a></li>
                `;
            }
            if (typeof this.result.gauge_1018 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1018');">КОС Зеленогорск</a></li>
                `;
            }
            if (typeof this.result.gauge_1019 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1019');">КОС Репино</a></li>
                `;
            }
            if (typeof this.result.gauge_1020 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1020');">КНС Иловые площадки</a></li>
                `;
            }
            if (typeof this.result.gauge_1021 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1021');">ВНС Кушелевская</a></li>
                `;
            }
            if (typeof this.result.gauge_1022 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1022');">ВНС Муринская</a></li>
                `;
            }
            if (typeof this.result.gauge_1023 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1023');">ВНС Стрельна</a></li>
                `;
            }
            if (typeof this.result.gauge_1024 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1024');">Центральная станция аэрации</a></li>
                `;
            }
            if (typeof this.result.gauge_1025 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1025');">КОС Сестрорецк</a></li>
                `;
            }
            if (typeof this.result.gauge_1026 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1026');">ВС Волковская</a></li>
                `;
            }
            if (typeof this.result.gauge_1027 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1027');">ВНС Московская</a></li>
                `;
            }
            if (typeof this.result.gauge_1028 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1028');">Южная ВС</a></li>
                `;
            }
            if (typeof this.result.gauge_1029 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1029');">КОС Металлострой</a></li>
                `;
            }
            if (typeof this.result.gauge_1030 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1030');">ВНС Пулковская</a></li>
                `;
            }
            if (typeof this.result.gauge_1031 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1031');">ПНС Волхонка</a></li>
                `;
            }
            if (typeof this.result.gauge_1032 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1032');">ВНС Горская</a></li>
                `;
            }
            if (typeof this.result.gauge_1034 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1034');">ФГБУ СЗУГМС</a></li>
                `;
            }
            if (typeof this.result.gauge_1035 !== "undefined") {
                menuString += `
                <li><a href="javascript:void(0);" onclick="showTable('1034');">ГГО Воейково</a></li>
                `;
            }
            return menuString;
        } else {
            return menuString;
        }
    }
}

const state = {};

const controlGauges = async () => {
    // Создаем новый объект класса Gauges
    state.gauges = new Gauges();

    const tableContainer = document.querySelector('.precipitation-table');
    const renderContainer = document.querySelector('.render');

    // Очищаем предыдущие данные
    tableContainer.innerHTML = ' ';
    document.querySelector('.main-menu').innerHTML = ' ';

    // Скрываем форму расчета осадков на время загрузки данных
    document.querySelector('.calculate-form').style.display = 'none';

    // Отображаем загрузку данных
    renderLoader(renderContainer);

    // Ждем ответа от osadki.php с данными в формате json
    await state.gauges.getResult();

    // Удаляем загрузчик
    clearLoader();

    // Возвращаем форму расчета осадков
    document.querySelector('.calculate-form').style.display = 'flex';

    const menu = state.gauges.createMenu();

    document.querySelector('.main-menu').insertAdjacentHTML('beforeend', menu);

    // Создаем таблицы с данными и записываем в переменную table
    const table = state.gauges.createTables();

    // Вставляем текущие данные
    tableContainer.insertAdjacentHTML('beforeend', table);
}

// Обработчик события submit
document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    controlGauges();
});

// Функция для отображения таблицы для выбранного пункта
const showTable = gaugeid => {
    const table = document.getElementsByTagName('table');
    const gauge = document.querySelector(`.gauge-${gaugeid}`);
    const info = document.querySelector('.info');
    if (info) {
        info.parentElement.removeChild(info);
    }
    if (document.querySelector(`.gauge-${gaugeid}`)) {
        for (let i = 0; i < table.length; i++) {
            table[i].style.display = 'none';
        }
        gauge.style.display = 'block';
    } else {
        alert('Для выбранной станции нет значений');
    }
}

const renderLoader = parent => {
    const loader = `
    <div class="loader">
        <svg>
            <use href="/img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}

const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
}

/**
 * Календарь datetimepicker
 */
$.datetimepicker.setLocale('ru');

jQuery('#date-time-begin').datetimepicker({
    format:'Y-m-d',
    timepicker:false
});
jQuery('#date-time-end').datetimepicker({
    format: 'Y-m-d',
    timepicker:false
});
