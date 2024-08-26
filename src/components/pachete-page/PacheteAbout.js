import React from 'react';
import { packages } from '../../../constants/packages';

const PacheteAbout = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-4 lg:px-8 overflow-hidden">
      <div className="w-full lg:w-[80%] flex flex-col items-center">
        <div className="flex flex-col justify-center p-10 text-start">
          <h2 className="text-2xl lg:text-3xl mt-4">
            Alege pachetul perfect pentru evenimentul tău
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-[80%]">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-lg p-6 flex flex-col ${
              pkg.special ? 'border-[#bb835e] bg-[#fff4e0]' : 'border-gray-200'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">{pkg.title}</h3>

            <ul className="mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i} className="text-gray-700 mb-2">
                  <strong>{feature}</strong> -{' '}
                  {getFeatureDetail(feature)}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <p className="text-lg font-bold text-[#bb835e]">
                {pkg.price} RON
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getFeatureDetail = (feature) => {
  switch (feature) {
    case 'Fotografii nelimitate':
      return 'Capturați fiecare moment special al evenimentului dvs. fără să vă faceți griji că veți rămâne fără spațiu pentru poze.';

    case 'Printuri nelimitate':
      return 'Oferiți invitaților dvs. amintiri tangibile pe care le pot lua acasă, cu posibilitatea de a printa un număr nelimitat de fotografii în timpul evenimentului.';

    case 'Diferite formate de print 10x15 si 5x10':
      return 'Alegeți formatul care se potrivește cel mai bine preferințelor dvs. Printurile 10x15 sunt clasice, iar cele 5x10 sunt perfecte pentru amintiri rapide.';

    case 'Banda magnetica gratuita':
      return 'Atașați cu ușurință fotografiile pe frigidere sau alte suprafețe metalice cu ajutorul benzilor magnetice incluse.';

    case 'Grafica personalizata':
      return 'Adăugați un plus de personalitate fotografiilor dvs. cu un design grafic personalizat, adaptat tematicii evenimentului.';

    case 'Accesorii / recuzita variata si amuzanta':
      return 'Distracție garantată cu o gamă variată de accesorii și recuzită, perfecte pentru a crea momente amuzante și memorabile.';

    case 'Asistent prezent pe toata perioada inchirierii':
      return 'Un profesionist dedicat va fi la dispoziția dvs. pe tot parcursul evenimentului pentru a se asigura că totul decurge perfect.';

    case 'Transmiterea tuturor fotografiilor':
      return 'După eveniment, veți primi toate fotografiile capturate, astfel încât să puteți retrăi fiecare moment la orice oră.';

    case 'Background la alegere - din stocul nostru':
      return 'Alegeți fundalul perfect dintr-o varietate de opțiuni disponibile, pentru a se potrivi stilului și tematicii evenimentului dvs.';

    case 'Optional ALBUM-guestbook personalizat':
      return 'Creați un album de amintiri unic, unde invitații dvs. pot lăsa mesaje și semnături lângă fotografii, pentru a păstra amintirile vii.';

    default:
      return '';
  }
};

export default PacheteAbout;
