import { useTranslations } from "next-intl";

export const useData = () => {
  const t = useTranslations("scrollcards");

  const projects = [
    {
      title: t("scrollcard1.title"),
      description1: t("scrollcard1.description1"),
      description2: t("scrollcard1.description2"),
      src: "presentation.png",
      color: "#228B22",
    },
    {
      title: t("scrollcard2.title"),
      description1: t("scrollcard2.description1"),
      description2: t("scrollcard2.description2"),
      src: "itWork.jpg",
      color: "#60b960",
    },
    {
      title: t("scrollcard3.title"),
      description1: t("scrollcard3.description1"),
      description2: t("scrollcard3.description2"),
      src: "fight.jpg",
      color: "#6B8E23",
    },
    {
      title: t("scrollcard4.title"),
      description1: t("scrollcard4.description1"),
      description2: t("scrollcard4.description2"),
      src: "minigame.jpg",
      color: "#99CF63",
    },
  ];
  const firstTimeline = {
    mainTitle: "Программа на 21-е сентября",
    items: [
      {
        id: 1,
        time: "10:00 - 11:00",
        title: "Торжественное открытие фестиваля.",
        subtitle:
          "Приветственные слова организаторов и представителей городских властей.",
      },
      {
        id: 2,
        time: "10:00 - 18:00",
        title: "Музыкальное настроение от лучших Dj Ташкента",
        subtitle:
          "Дискотека на открытом воздухе под киловатты качественного звука",
      },
      {
        id: 3,
        time: "11:00 - 13:00",
        title: "Выставка: Настоящее электромобилей",
        subtitle:
          "Демонстрация последних моделей электроавтомобилей от ведущих производителей.",
      },
      {
        id: 4,
        time: "13:00 - 14:00",
        title: "Open Talk",
        subtitle: "о безопасном вождении самокатов",
      },
      {
        id: 5,
        time: "14:00 - 16:00",
        title: "Серия лекций об экологическом транспорте",
        subtitle:
          "Эксперты поделятся знаниями и развеют мифы об экологии и электротранспорте.",
      },
      {
        id: 6,
        time: "16:00 - 18:00",
        title: "Панельная дискуссия",
        subtitle: "Будущее транспорта: электрические решения",
      },
      {
        id: 7,
        time: "16:00 - 18:00",
        title: "Битва роботов отборочный день",
        subtitle:
          "Команды инженеров создадут механических бойцов и сразятся в октагоне.",
      },
      {
        id: 8,
        time: "18:00 - 20:00",
        title: "Концертная программа",
        subtitle: "Выступление звезд и секретного хедлайнера.",
      },
    ],
  };
  const secondTimeline = {
    mainTitle: "Программа на 22-е сентября",
    items: [
      {
        id: 1,
        time: "10:00 - 19:00",
        title: "Мастер-классы по электромобилям",
        subtitle:
          "Узнайте секреты ухода и эксплуатации электромобилей от профессионалов.",
      },
      {
        id: 2,
        time: "10:00 - 18:00",
        title: "Музыкальное настроение от лучших Dj Ташкента",
        subtitle: "Продолжение эпичной дискотеки на открытом воздухе.",
      },
      {
        id: 3,
        time: "12:00 - 14:00",
        title: "Воркшопы по зарядке и хранению энергии",
        subtitle:
          "Узнайте о передовых технологиях и получите ценные знания от экспертов.",
      },
      {
        id: 4,
        time: "15:00 - 16:30",
        title: 'Конференция "Инвестиции в электромобильную индустрию"',
        subtitle:
          "Открытая дискуссия о развитии инфраструктуры электротранспорта.",
      },
      {
        id: 5,
        time: "16:30 - 18:00",
        title: "Тест-драйвы электроавтомобилей",
        subtitle: "Попробуйте новейшие электромобили в действии.",
      },
      {
        id: 6,
        time: "16:00 - 18:00",
        title: "Битва роботов финал",
        subtitle: "Финальные сражения стальных гладиаторов!",
      },
      {
        id: 7,
        time: "18:00 - 20:00",
        title: "Завершающий концерт",
        subtitle:
          "Выступления звезд и торжественная церемония закрытия фестиваля.",
      },
      {
        id: 8,
        time: "18:00 - 20:00",
        title: "Концертная программа",
        subtitle: "Продолжение концерта со звездами и известными блогерами.",
      },
    ],
  };

  return { projects, firstTimeline, secondTimeline };
};

export default useData;
