class Gauges {

    gaugeName: [
        'КНС Комендантский аэродром',
        'Северная станция аэрации',
        'КОС Кронштадт',
        'ВНС Песочная',
        'ВНС Парнас',
        'ВНС Ломоносов',
        'ВНС Заячий Ремиз',
        'Красносельская станция аэрации',
        'Юго-Западные очистные сооружения',
        'ВС Колпинская',
        'ВНС 4-й подъем',
        'КНС Московская славянка',
        'КОС Пушкин',
        'Северная ВС',
        'Главная водопроводная станция 2П',
        'ВС Дудерговская',
        'Стационарный снегоплавильный пункт',
        'КОС Зеленогорск',
        'КОС Репино',
        'КНС Иловые площадки',
        'ВНС Кушелевская',
        'ВНС Муринская',
        'ВНС Стрельна',
        'Центральная станция аэрации',
        'КОС Сестрорецк',
        'ВС Волковская',
        'ВНС Московская',
        'Южная ВС',
        'КОС Металлострой',
        'ВНС Пулковская',
        'ПНС Волхонка',
        'ВНС Горская',
        'ФГБУ СЗУГМС',
        'ГГО Воейково'
    ];

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
            // console.log(this.result[0].gauge);
        } catch (error) {
            console.log(error);
        }
    }

    createMenu() {
        let menuString;
        menuString = ``;
        if (this.result.length !== 0) {
            for (let i = 0; i < this.result.length; i++) {
                switch (this.result[i].gauge) {
                    case 1001:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1001');">${this.gaugeName[0]}</a></li>
                        `;
                        break;
                    case 1002:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1002');">${this.gaugeName[1]}</a></li>
                        `;
                        break;
                    case 1003:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1003');">${this.gaugeName[2]}</a></li>
                        `;
                        break;
                    case 1004:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1004');">${this.gaugeName[3]}</a></li>
                        `;
                        break;
                    case 1005:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1005');">${this.gaugeName[4]}</a></li>
                        `;
                        break;
                    case 1006:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1006');">${this.gaugeName[5]}</a></li>
                        `;
                        break;
                    case 1007:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1007');">${this.gaugeName[6]}</a></li>
                        `;
                        break;
                    case 1008:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1008');">${this.gaugeName[7]}</a></li>
                        `;
                        break;
                    case 1009:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1009');">${this.gaugeName[8]}</a></li>
                        `;
                        break;
                    case 1010:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1010');">${this.gaugeName[9]}</a></li>
                        `;
                        break;
                    case 1011:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1011');">${this.gaugeName[10]}</a></li>
                        `;
                        break;
                    case 1012:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1012');">${this.gaugeName[11]}</a></li>
                        `;
                        break;
                    case 1013:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1013');">${this.gaugeName[12]}</a></li>
                        `;
                        break;
                    case 1014:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1014');">${this.gaugeName[13]}</a></li>
                        `;
                        break;
                    case 1015:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1015');">${this.gaugeName[14]}</a></li>
                        `;
                        break;
                    case 1016:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1016');">${this.gaugeName[15]}</a></li>
                        `;
                        break;
                    case 1017:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1017');">${this.gaugeName[16]}</a></li>
                        `;
                        break;
                    case 1018:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1018');">${this.gaugeName[17]}</a></li>
                        `;
                        break;
                    case 1019:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1019');">${this.gaugeName[18]}</a></li>
                        `;
                        break;
                    case 1020:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1020');">${this.gaugeName[19]}</a></li>
                        `;
                        break;
                    case 1021:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1021');">${this.gaugeName[20]}</a></li>
                        `;
                        break;
                    case 1022:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1022');">${this.gaugeName[21]}</a></li>
                        `;
                        break;
                    case 1023:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1023');">${this.gaugeName[22]}</a></li>
                        `;
                        break;
                    case 1024:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1024');">${this.gaugeName[23]}</a></li>
                        `;
                        break;
                    case 1025:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1025');">${this.gaugeName[24]}</a></li>
                        `;
                        break;
                    case 1026:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1026');">${this.gaugeName[25]}</a></li>
                        `;
                        break;
                    case 1027:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1027');">${this.gaugeName[26]}</a></li>
                        `;
                        break;
                    case 1028:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1028');">${this.gaugeName[27]}</a></li>
                        `;
                        break;
                    case 1029:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1029');">${this.gaugeName[28]}</a></li>
                        `;
                        break;
                    case 1030:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1030');">${this.gaugeName[29]}</a></li>
                        `;
                        break;
                    case 1031:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1031');">${this.gaugeName[30]}</a></li>
                        `;
                        break;
                    case 1032:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1032');">${this.gaugeName[31]}</a></li>
                        `;
                        break;
                    case 1034:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1034');">${this.gaugeName[32]}</a></li>
                        `;
                        break;
                    case 1035:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1034');">${this.gaugeName[33]}</a></li>
                        `;
                        break;
                    default:
                        continue;
                    }
            }
            return menuString;
        } else {
          return menuString = ``;
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
    // const table = state.gauges.createTables();

    // Вставляем текущие данные
    // tableContainer.insertAdjacentHTML('beforeend', table);
}

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
// Функция отображения загрузчика
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
// Функция удаления загрузчика
const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
}

// Обработчик события submit
document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    controlGauges();
});

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
