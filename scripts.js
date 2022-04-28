const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const gender = getSelectedValue('gender');
    const age = getInputNumberValue('age');
    const weight = getInputNumberValue('weight');
    const height = getInputNumberValue('height');  
    const activityLevel = getSelectedValue('activity_level');

    const tmb = Math.round(
        gender === 'female'
        ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
        : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    );
    const maintenance = Math.round(tmb * Number(activityLevel));
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;

    const layout = `
        <h2>Hesaplama sonuçları:</h2>
        <div class="result-content">
        <ul>
            <li>
            Normal olarak günlük <strong>${tmb} kaloriye</strong> ihtiyaç duyuyorsunuz.
            </li>
            <li>
            Kilonuzu korumak için ortalama <strong>${maintenance} kalori</strong> tüketmeniz gerekiyor.
            </li>
            <li>
            Kilo vermek için günlük kalori miktarınızı <strong>${loseWeight} kaloriye</strong> düşürmeniz gerekebilir.
            </li>
            <li>
            Kilo almak için günlük <strong>${gainWeight} kalori</strong> tüketmeniz size yararlı olacaktır.
            </li>
        </ul>
        </div>
    `;

    const result = document.getElementById('result');

    result.innerHTML = layout;
}

var options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '&#x1f313;', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}