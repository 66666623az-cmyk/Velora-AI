export type LessonQuestion = {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export type LessonActivity = {
  id: string
  title: string
  description: string
  type: 'reading' | 'discussion' | 'practice' | 'quiz'
}

export const grade1QuranLesson1 = {
  id: 'grade1-quran-lesson-1',
  grade: 1,
  subject: 'قرآن',
  lessonNumber: 1,
  title: 'جشن قرآن',
  time: 'هفته اول مهرماه',
  sessions: ['جلسه اول', 'جلسه دوم'],

  objectives: [
    'آشنایی با جشن قرآن',
    'تقویت علاقه به یادگیری قرآن',
    'شرکت در فعالیت‌های گروهی',
    'تمرین گوش‌دادن و صحبت‌کردن درباره قرآن',
  ],

  activities: [
    {
      id: 'celebration',
      title: 'جشن قرآن',
      description:
        'درباره جشن آغاز یادگیری قرآن گفت‌وگو کنید و بگویید چگونه می‌توان در این جشن شرکت کرد.',
      type: 'discussion',
    },
    {
      id: 'poem',
      title: 'شعر یا سوره زیبا',
      description:
        'یک شعر مناسب یا سوره‌ای را که آموخته‌اید، با کمک معلم بخوانید.',
      type: 'reading',
    },
    {
      id: 'story',
      title: 'داستان و خاطره',
      description:
        'یک خاطره یا داستان مناسب درباره قرآن برای دوستان خود تعریف کنید.',
      type: 'discussion',
    },
  ] satisfies LessonActivity[],

  questions: [
    {
      id: 'q1',
      question: 'نام درس اول قرآن پایه اول چیست؟',
      options: ['دوستی', 'جشن قرآن', 'بهار', 'مدرسه ما'],
      correctAnswer: 1,
      explanation: 'عنوان درس اول در اطلاعات کتابی که فرستادی «جشن قرآن» است.',
    },
    {
      id: 'q2',
      question: 'در جشن قرآن کدام فعالیت مناسب است؟',
      options: [
        'خواندن یک شعر زیبا',
        'تعریف داستانی درباره قرآن',
        'شرکت در فعالیت گروهی',
        'همه موارد',
      ],
      correctAnswer: 3,
      explanation:
        'این فعالیت‌ها می‌توانند به برگزاری جشن قرآن کمک کنند.',
    },
  ] satisfies LessonQuestion[],
} as const
