
function pageKoDikha(joPagePerShowHo, ismeShowKar){
    const joBanayaHaiYahaStoreKaro = document.createElement(joPagePerShowHo.uskaType);
    joBanayaHaiYahaStoreKaro.innerHTML =  joPagePerShowHo.linkKiJhagePerYeShowKaro;

    joBanayaHaiYahaStoreKaro.setAttribute(
        'href',
        joPagePerShowHo.kaamKyaKare.href
    );
    joBanayaHaiYahaStoreKaro.setAttribute(
        'target',
        joPagePerShowHo.kaamKyaKare.target
    )
    ismeShowKar.appendChild(joBanayaHaiYahaStoreKaro)
}


const joPagePerShowHo = {
    uskaType: 'a',
    kaamKyaKare: {
        href: 'https://google.com',
        target: '_blank'
    },
    linkKiJhagePerYeShowKaro: 'Bhai Yaha click kar google per chala jaaye ga vo bhi  dusre page per'
};

const ismeShowKar = document.querySelector('#root');

pageKoDikha(joPagePerShowHo, ismeShowKar)