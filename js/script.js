class Gauges {

    constructor(gaugeName) {
        this.gaugeName = gaugeName;
    }

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
                        <li><a href="javascript:void(0);" onclick="showTable('1001');">${this.gaugeName.get('1001')}</a></li>
                        `;
                        break;
                    case 1002:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1002');">${this.gaugeName.get('1002')}</a></li>
                        `;
                        break;
                    case 1003:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1003');">${this.gaugeName.get('1003')}</a></li>
                        `;
                        break;
                    case 1004:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1004');">${this.gaugeName.get('1004')}</a></li>
                        `;
                        break;
                    case 1005:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1005');">${this.gaugeName.get('1005')}</a></li>
                        `;
                        break;
                    case 1006:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1006');">${this.gaugeName.get('1006')}</a></li>
                        `;
                        break;
                    case 1007:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1007');">${this.gaugeName.get('1007')}</a></li>
                        `;
                        break;
                    case 1008:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1008');">${this.gaugeName.get('1008')}</a></li>
                        `;
                        break;
                    case 1009:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1009');">${this.gaugeName.get('1009')}</a></li>
                        `;
                        break;
                    case 1010:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1010');">${this.gaugeName.get('1010')}</a></li>
                        `;
                        break;
                    case 1011:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1011');">${this.gaugeName.get('1011')}</a></li>
                        `;
                        break;
                    case 1012:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1012');">${this.gaugeName.get('1012')}</a></li>
                        `;
                        break;
                    case 1013:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1013');">${this.gaugeName.get('1013')}</a></li>
                        `;
                        break;
                    case 1014:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1014');">${this.gaugeName.get('1014')}</a></li>
                        `;
                        break;
                    case 1015:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1015');">${this.gaugeName.get('1015')}</a></li>
                        `;
                        break;
                    case 1016:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1016');">${this.gaugeName.get('1016')}</a></li>
                        `;
                        break;
                    case 1017:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1017');">${this.gaugeName.get('1017')}</a></li>
                        `;
                        break;
                    case 1018:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1018');">${this.gaugeName.get('1018')}</a></li>
                        `;
                        break;
                    case 1019:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1019');">${this.gaugeName.get('1019')}</a></li>
                        `;
                        break;
                    case 1020:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1020');">${this.gaugeName.get('1020')}</a></li>
                        `;
                        break;
                    case 1021:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1021');">${this.gaugeName.get('1021')}</a></li>
                        `;
                        break;
                    case 1022:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1022');">${this.gaugeName.get('1022')}</a></li>
                        `;
                        break;
                    case 1023:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1023');">${this.gaugeName.get('1023')}</a></li>
                        `;
                        break;
                    case 1024:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1024');">${this.gaugeName.get('1024')}</a></li>
                        `;
                        break;
                    case 1025:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1025');">${this.gaugeName.get('1025')}</a></li>
                        `;
                        break;
                    case 1026:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1026');">${this.gaugeName.get('1026')}</a></li>
                        `;
                        break;
                    case 1027:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1027');">${this.gaugeName.get('1027')}</a></li>
                        `;
                        break;
                    case 1028:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1028');">${this.gaugeName.get('1028')}</a></li>
                        `;
                        break;
                    case 1029:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1029');">${this.gaugeName.get('1029')}</a></li>
                        `;
                        break;
                    case 1030:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1030');">${this.gaugeName.get('1030')}</a></li>
                        `;
                        break;
                    case 1031:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1031');">${this.gaugeName.get('1031')}</a></li>
                        `;
                        break;
                    case 1032:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1032');">${this.gaugeName.get('1032')}</a></li>
                        `;
                        break;
                    case 1034:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1034');">${this.gaugeName.get('1034')}</a></li>
                        `;
                        break;
                    case 1035:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1035');">${this.gaugeName.get('1035')}</a></li>
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
    state.gauges = new Gauges(new Map([
        ['1001', 'КНС Комендантский аэродром'],
        ['1002', 'Северная станция аэрации'],
        ['1003', 'КОС Кронштадт'],
        ['1004', 'ВНС Песочная'],
        ['1005', 'ВНС Парнас'],
        ['1006', 'ВНС Ломоносов'],
        ['1007', 'ВНС Заячий Ремиз'],
        ['1008', 'Красносельская станция аэрации'],
        ['1009', 'Юго-Западные очистные сооружения'],
        ['1010', 'ВС Колпинская'],
        ['1011', 'ВНС 4-й подъем'],
        ['1012', 'КНС Московская славянка'],
        ['1013', 'КОС Пушкин'],
        ['1014', 'Северная ВС'],
        ['1015', 'Главная водопроводная станция 2П'],
        ['1016', 'ВС Дудерговская'],
        ['1017', 'Стационарный снегоплавильный пункт'],
        ['1018', 'КОС Зеленогорск'],
        ['1019', 'КОС Репино'],
        ['1020', 'КНС Иловые площадки'],
        ['1021', 'ВНС Кушелевская'],
        ['1022', 'ВНС Муринская'],
        ['1023', 'ВНС Стрельна'],
        ['1024', 'Центральная станция аэрации'],
        ['1025', 'КОС Сестрорецк'],
        ['1026', 'ВС Волковская'],
        ['1027', 'ВНС Московская'],
        ['1028', 'Южная ВС'],
        ['1029', 'КОС Металлострой'],
        ['1030', 'ВНС Пулковская'],
        ['1031', 'ПНС Волхонка'],
        ['1032', 'ВНС Горская'],
        ['1034', 'ФГБУ СЗУГМС'],
        ['1035', 'ГГО Воейково']
    ]));

    const renderContainer = document.querySelector('.render');
    const tableContainer = document.querySelector('.precipitation-table');

    // Очищаем предыдущие данные
    tableContainer.innerHTML = '';

    // tableContainer.innerHTML = ' ';
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

    if (state.gauges.result.length === 0) {
        tableContainer.innerHTML = '<b>За выбранный период нет данных</b>';
    }

}

// Функция для отображения таблицы для выбранного пункта
const showTable = gaugeid => {
    const tableContainer = document.querySelector('.precipitation-table');
    let tableString = ``;
    tableContainer.innerHTML = '';
    tableString += `
    <table>
        <caption>${state.gauges.gaugeName.get(`${gaugeid}`)}</caption>
        <tr>
            <td>Диапазон значений(дд-мм-гг чч:мм)</td>
            <td>Значение(см)</td>
        </tr>
    `;
    for (let i = 0; i < state.gauges.result.length; i++) {
        if (gaugeid === String(state.gauges.result[i].gauge)) {
            for (let j = 0; j < state.gauges.result[i].arrayValue.length; j++) {
                if (state.gauges.result[i].arrayValue[j] < 9000) {
                    tableString += `
                    <tr>
                        <td>${state.gauges.result[i].arrayRange[j]}</td>
                        <td>${state.gauges.result[i].arrayValue[j]}</td>
                    <tr>
                    `;
                }
            }
        }
    }
    tableString += '</table>';
    tableContainer.insertAdjacentHTML('beforeend', tableString);

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
