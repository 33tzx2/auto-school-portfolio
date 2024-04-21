import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'
import HowGetOffer from '../components/HowGetOffer'
import { useTranslation } from 'react-i18next';


const StudentZone = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center'>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Студенческая зона'} links={['АВТО СТОП', 'ПРЕДЛОЖЕНИЯ']} linksArdess={['/', '/offers']} lastAdres={'СТУДЕНЧЕСКАЯ ЗОНА'}/>
      <HowGetOffer
        title={'Как получить водительские права?'}
        firstText={['Водительское удостоверение  может получить лицо, которое:']}
        features={['Достигло возраста, необходимого для данной категории.', 'Получило медицинскую справку, подтверждающую отсутствие противопоказаний по здоровью к вождению.', 'Получило психологический сертификат, подтверждающий отсутствие психологических противопоказаний к управлению транспортным средством (по категориям С, С+Е, D).', 'Прошло обучение, необходимое для данной категории.', 'Государственный экзамен, необходимый для данной категории, оно сдало с положительным результатом.']}
        secondText={['Водительское удостоверение не может быть выдано лицу, которому запрещено управлять автотранспортными средствами (например, вступившим в силу решением суда, решением комиссии по правонарушениям или решением другого компетентного судебного органа) - в течение срока действия этого запрета.']}
        secondTextBold={['Лицо, не достигшее 18-летнего возраста, может получить водительские права категории А1, В1 или Т с согласия своих родителей или опекуна.']}
      ></HowGetOffer>
      <HowGetOffer
        title={'Медицинское заключение'}
        firstText={['Вам следует обратиться к врачу, уполномоченному освидетельствовать водителей (кандидатов в водители), для получения соответствующей медицинской справки, подтверждающей отсутствие противопоказаний по состоянию здоровья к управлению транспортным средством. Если в результате медицинского осмотра выявлена ​​активная форма пристрастия к алкоголю или наркотику аналогичного действия, водительское удостоверение такому лицу не может быть выдано. Водительское удостоверение может содержать ограничения, обусловленные состоянием здоровья водителя или способностью управлять конкретным транспортным средством, это решает врач в медицинской справке (например, человек имеет право управлять транспортным средством, но только в очках).']}
        subTitle={'ОБУЧЕНИЕ'}
      ></HowGetOffer>
      <HowGetOffer
        firstText={['После оформления документов (включая медицинскую справку, согласие родителей и т. д.) необходимо создать анкету студента (в отделе связи, соответствующем вашему месту жительства).', 'Целью обучения является подготовка лица, претендующего на получение водительских прав, к управлению соответствующими видами транспортных средств таким образом, чтобы не создавать угрозы безопасности и порядку дорожного движения.', 'Обучение состоит из теоретических и практических занятий. Количество часов занятий определяется инструктором по вождению индивидуально для каждого человека – в зависимости от знаний и талантов кандидата – но в случае теории количество часов для одной категории водительских прав не может быть менее:']}
        features={['30 часов для категорий А, А1, В, В1, Т', '20 часов для категорий C, C+E, D, D+E, C1, C1+E, D1, D1+E, B+E']}
      ></HowGetOffer>
      <HowGetOffer
        firstText={['Для практических занятий количество часов не может быть менее:']}
        features={['15 часов для категории B+E', '20 часов для категорий А, А1, С1, С1+Е, D1+Е, Т', '25 часов для категории C+E или D+E', '30 часов для категории B, B1, C, D1 или разрешения', '60 часов для категории D.']}
        secondText={['Количество часов по отдельным категориям может измениться в случае обучения более чем по одной категории одновременно или если у вас уже имеется соответствующая категория квалификации. По окончании обучения человек получает сертификат об окончании базового курса подготовки кандидатов в водители.']}
      ></HowGetOffer>
      <HowGetOffer
        title={'ГОСУДАРСТВЕННЫЙ ЭКЗАМЕН'}
        firstText={['Для того, чтобы сдать государственный экзамен по вождению, после сдачи внутреннего экзамена вам достаточно пойти с удостоверением РПК в выбранный вами Воеводский центр дорожного движения (в Польше 49 центров, сдать экзамен можно в любой, который вы выберете). Там вы оплачиваете экзамен и договариваетесь о дате его сдачи.']}
        secondText={['Теоретический экзамен проводится с использованием компьютерного устройства. В случае практического экзамена в WORD Warszawa требуется компьютерная рандомизация экзаменаторов и кандидатов. В связи с вышеизложенным ожидание начала практического экзамена может продлиться до 2 часов с даты запланированного экзамена (это касается экзаменов категории А и В).']}
      ></HowGetOffer>
      <HowGetOffer
        title={'ПОЛУЧЕНИЕ ВОДИТЕЛЬСКИХ ПРАВ'}
        firstText={['Водительское удостоверение выдает за плату староста по месту жительства лица, ходатайствующего о его получении. Исключением является столица Варшава, где водительские права выдаются представительствами Управления по административным и гражданским вопросам в районных управлениях в зависимости от места жительства, в частности, отделов или отделов связи районных отделений). Военнослужащим срочной военной службы водительское удостоверение на срок не более 1 года выдается командиром воинской части. После окончания военной службы документ, выданный командиром части, обменивается старостой по месту жительства соответствующего лица.']}
      ></HowGetOffer>
      <HowGetOffer
        title={'НЕОБХОДИМЫЕ ДОКУМЕНТЫ'}
        firstText={['Единственным документом, необходимым для регистрации на экзамен в Областном центре дорожного движения «ВОРД», является документ, подтверждающий наличие РПК (профиля кандидата в водители).', 'Для получения данного документа в Управлении связи (соответствующем вашему месту жительства) вам потребуются следующие документы:']}
        features={['Заявление на получение водительских прав.', 'Письменное согласие родителя или опекуна (при необходимости – для категорий АМ, А1).', 'Медицинская справка, подтверждающая отсутствие противопоказаний к вождению.', 'Психологическая справка об отсутствии противопоказаний к вождению (распространяется на категории С, С+Е, D).', 'Цветная фотография (3,5 см/4,5 см).', 'Ксерокопия ваших водительских прав (если они ранее были у студента).', 'Удостоверение личности или паспорт.']}
        secondTextBold={['ЕСЛИ МЫ ХОТИМ ПОЛУЧИТЬ ПКК ДЛЯ ДРУГОГО ЧЕЛОВЕКА, НЕОБХОДИМО ПИСЬМЕННОЕ РАЗРЕШЕНИЕ.']}
      ></HowGetOffer>
      <HowGetOffer
         firstText={['Сдача экзамена по вождению зависит не только от ваших навыков. Этому способствует множество факторов. Для многих людей экзамен связан с огромным стрессом и зачастую это становится причиной отрицательного результата. Готовясь к экзамену, не будем забывать о моральной подготовке. У каждого из нас есть свои проверенные методы борьбы со стрессом, но мы обязательно будем чувствовать себя увереннее, если хорошо разберемся в правилах. Это также может помочь вам ознакомиться с точными критериями выставления оценок на экзамене и правилами, регулирующими проведение экзамена. Знайте свои права.']}
        secondText={['Помните о позитивном настрое. Вы собираетесь сдать экзамен, а не провалить его. Не поддавайтесь суеверию, что с первого раза не пройти! И даже если у вас не получится, это не значит провал! Вы всегда можете присоединиться снова!']}
      ></HowGetOffer>
      <HowGetOffer
        title={'ТЕОРЕТИЧЕСКИЙ ЭКЗАМЕН'}
        firstText={['Теоретическая часть государственного экзамена включает: 20 вопросов по базовым знаниям и 12 вопросов по специальным знаниям. На каждый вопрос есть один правильный ответ. Ответ на этот вопрос предполагает:']}
        features={['Ответы «ДА» или «НЕТ» – в случае вопросов базовых знаний. У экзаменуемого есть 20 секунд на прочтение вопроса, время на прочтение видео, а затем у него есть 15 секунд на ответ;', 'выбор из трех ответов – А, Б, В – одного в случае вопросов, относящихся к специальным знаниям. Экзаменуемому дается 50 секунд, чтобы прочитать вопрос и ответ. Ответы можно менять до тех пор, пока ответ не будет одобрен или пока не истечет время, отведенное на ответ. Неуказание какого-либо ответа равносильно даче неправильного ответа и получению 0 баллов.']}
        secondText={['Общее количество баллов, которое можно получить по теоретической части государственного экзамена, составляет 74, а положительный результат получают лица, набравшие не менее 68 баллов. Положительный результат по теоретической части действителен бессрочно. Продолжительность теоретической части экзамена – 25 минут.']}
      ></HowGetOffer>
      <HowGetOffer
        title={'ПРАКТИЧЕСКИЙ ЭКЗАМЕН'}
        features={['Площадь маневрирования', 'Вождение по городу']}
        secondText={['Набор экзаменов выбирается компьютером случайным образом.', 'Начиная езду по городу, не думайте об экзаменаторе как о враге. Старайтесь ехать спокойно и с максимальной скоростью, но будьте осторожны и не двигайтесь слишком медленно. Экзаменатор может расценить это как препятствие движению других участников, а в некоторых ситуациях – как угрозу безопасности дорожного движения. Не волнуйтесь, если ваш двигатель однажды заглохнет. Только повторение одной и той же ошибки дважды приведет к провалу экзамена. Помните, что экзаменатор не может давать указания, не соответствующие правилам дорожного движения. Если вы не услышали команду или не поняли ее, уточните, например, на какую дорогу вам следует свернуть. Если вы не выполнили инструкции, например, не успели перестроиться в левую полосу перед поворотом налево, ведите машину правильно и постарайтесь соблюдать правила, например, развернитесь на следующем перекрестке и следуйте инструкциям.']}
      ></HowGetOffer>
      <HowGetOffer
        title={'КОГДА ЭТО НЕ РАБОТАЕТ'}
         secondText={['В случае неудачи экзаменатор обязан указать причины выставления отрицательной оценки. Не расстраивайтесь из-за неудач. Это могло случиться с кем угодно. Дома спокойно проанализируйте, какие ошибки вы допустили. Нужны ли вам дополнительные приводы для лучшего управления автомобилем или основной причиной стал стресс? Прежде чем снова сдавать экзамен, постарайтесь поработать над своими слабостями. Теперь вы будете точно знать, что вас ждет, и сможете подготовиться еще лучше.', 'Теоретический экзамен действителен ВСЕГДА.']}
      ></HowGetOffer>
      <HowGetOffer
        title={'ЭКЗАМЕНАЦИОННЫЕ ЗАДАНИЯ'}
        firstText={['Практический экзамен состоит из двух частей:']}
        features={['Маневры, выполняемые на месте обследования', 'Вождение в городском потоке']}
        secondText={['Вид заданий на месте экзамена зависит от категории водительских прав, на получение которых претендует экзаменуемый.']}
      ></HowGetOffer>
      <HowGetOffer
         firstText={['Комплексы задач на участке маневрирования:']}
         features={['категория А', 'категория B', 'категория ВЕ', 'категория С', 'Категория CE', 'категория Д – проверка технического состояния', 'категория Д – маневры']}
      ></HowGetOffer>
      <div className='max-w-[1270px] min-h-[50px] w-full pb-[60px]'>
        <div className='text-center text-[1.5em] lg:text-[2.5em] text-[#0378db] font-semibold'>{t("Тест на вождение")}</div>
        <div className='text-[1.5em] '>{t("Перейти к онлайн-тестам:")}</div>
        <a href='https://www.teoria.pl/' target='blank' className='text-[1.5em] text-[#0378db]'>https://www.teoria.pl/</a>
      </div>
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default StudentZone  