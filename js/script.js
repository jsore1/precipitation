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
            //console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    createTables() {
        let tableString;
        tableString = ``;
        if (this.result.length !== 0) {
            for (let j = 1010; j < 1036; j++) {
                let gauges;
                switch (j) {
                    case 1010:
                        gauges = this.result.gauge_1010;
                        break;
                    case 1016:
                        gauges = this.result.gauge_1016;
                        break;
                    case 1030:
                        gauges = this.result.gauge_1030;
                        break;
                    case 1032:
                        gauges = this.result.gauge_1032;
                        break;
                    case 1034:
                        gauges = this.result.gauge_1034;
                        break;
                    default:
                        continue;
                }
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
            for (let j = 1010; j < 1036; j++) {
                switch (j) {
                    case 1010:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1010');">ВС Колпинская</a></li>
                        `;
                        break;
                    case 1016:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1016');">ВС Дудерговская</a></li>
                        `;
                        break;
                    case 1030:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1030');">ВНС Пулковская</a></li>
                        `;
                        break;
                    case 1032:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1032');">ВНС Горская</a></li>
                        `;
                        break;
                    case 1034:
                        menuString += `
                        <li><a href="javascript:void(0);" onclick="showTable('1034');">ФГБУ СЗУГМС</a></li>
                        `;
                        break;
                    default:
                        continue;
                }
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
    let table;
    let gauge;
    const info = document.querySelector('.info');
    if (info) {
        info.parentElement.removeChild(info);
    }
    if (document.querySelector(`.gauge-${gaugeid}`)) {
        gauge = document.querySelector(`.gauge-${gaugeid}`);
        table = document.getElementsByTagName('table');
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