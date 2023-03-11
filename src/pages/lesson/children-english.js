import Image from "next/image";

const SunSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 flex-shrink-0"
  >
    <path
      strokeLinecap="round"
      stroklinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

export default function DetailPage() {
  return (
    <div className="container lg:max-w-screen-lg mx-auto sm:px-5 lg:px-0">
      <h1 className="my-10 px-5 sm:px-0 text-2xl font-bold text-gray-800">付费课程</h1>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 bg-white sm:rounded-2xl shadow overflow-hidden">
        <figure className="lg:max-w-[65%] overflow-hidden">
          <Image
            className="w-full sm:w-auto h-full object-fill"
            src="/static/img/cover/children-english.jpg"
            alt="点燃孩子英语潜能，让TA终生受益 - 妈妈是打造最佳英语学习环境的超级教练"
            width="666"
            height="384"
          />
        </figure>

        <div className="flex-1 flex flex-col justify-between">
          <div className="px-5 lg:px-0 lg:mr-5">
            <h1 className="lg:mt-4 text-gray-800 font-semibold text-xl">
              Spark Your Child's English Language Potential for Lifelong
              Benefits - Mom is the Super Coach for Creating the Best English
              Learning Environment!
            </h1>
            <h2 className="text-gray-700 font-semibold text-lg">
              点燃孩子英语潜能，让TA终生受益 - 妈妈是打造最佳英语学习环境的超级教练
            </h2>
          </div>
          <div className="mt-8 lg:mt-5 px-5 lg:px-0">
            <dl className="my-3 flex space-x-2 text-gray-600 font-medium text-base">
              <dt>课程更新频次：</dt>
              <dd>两期视频/月</dd>
            </dl>
            <dl className="my-3 flex space-x-2 text-gray-600 font-medium text-base">
              <dt>课程期限：</dt>
              <dd>6 个月</dd>
            </dl>
            <dl className="my-3 flex space-x-2 text-gray-700 font-medium text-base">
              <dt>价格：</dt>
              <dd>USD $90</dd>
            </dl>
            <div className="my-8 lg:my-4 sm:text-center lg:text-left">
              <button className="w-full sm:w-2/3 lg:w-auto px-10 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base">
                购买
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-md bg-white p-4 shadow">
        <h2 className="text-gray-800 font-semibold text-xl">FAQ (常见问题)</h2>
        <ul className="mt-10 text-gray-600 text-base space-y-10">
          <li>
            <h3 className="flex space-x-1 text-gray-700 font-semibold text-lg">
              <SunSvg />
              <span>Who is this course for? 本课程为谁而设？</span>
            </h3>
            <div className="mt-4 sm:pl-7 space-y-4">
              <p className="text-gray-600 text-base">
                This course is designed for parents who have children between
                the ages of 3 and 6 and want to participate in their children's
                English language learning at home while creating an environment
                where their children can hear English every day.
              </p>
              <p className="text-gray-600 text-base">
                译：本课程是为那些有3至6岁孩子的家长而设计的，这些家长希望在家里参与孩子的英语学习，同时创造一个环境让孩子每天都能听到英语。
              </p>
            </div>
          </li>
          <li>
            <h3 className="flex space-x-1 text-gray-700 font-semibold text-lg">
              <SunSvg />
              <span>
                Why should I teach my child English at home? My child will learn
                English as a foreign language once they start school.
              </span>
            </h3>
            <div className="mt-4 sm:pl-7 space-y-4">
              <p className="text-gray-600 text-base">
                Research has shown that the ages between 3 and 6 are the golden
                years for children to learn a language. During this time,
                children are like sponges and absorb everything they hear,
                including long sentences. These critical years provide an
                opportunity to help them learn English quickly. You don’t want
                to miss out on this window of opportunity as a parent.
              </p>
              <p className="text-gray-600 text-base">
                译：研究表明，3-6岁是儿童学习语言的黄金时期。在这段时间里，孩子们就像海绵一样，吸收他们听到的一切，包括长句子。这些关键时期提供了一个帮助他们快速学习英语的机会。作为父母的你，肯定不希望错过这段绝佳时期。
              </p>
              <p className="mt-5 text-gray-600 text-base">
                You are not expected to “TEACH” your child English. All you need
                to do is CREATE a supportive learning environment to help your
                child be naturally exposed to English.
              </p>
              <p className="text-gray-600 text-base">
                译：您不需要“教授”孩子英语。您只需要创造一个让孩子自然接触英语的学习环境，为他们提供支持。
              </p>
            </div>
          </li>
          <li>
            <h3 className="flex space-x-1 text-gray-700 font-semibold text-lg">
              <SunSvg />
              <span>
                I take my child to a language school once a week where he/she
                can learn 60 minutes of English. Why should I take the time to
                help my child with his English at home?
                我每周带孩子去一次语言学校，他/她可以学习60分钟的英语。为什么我还要花时间在家里帮助我的孩子学习英语？
              </span>
            </h3>
            <div className="mt-4 sm:pl-7 space-y-4">
              <p className="text-gray-600 text-base">
                Children at these ages indeed learn quickly, but they also
                forget quickly if they are not regularly exposed to the
                language. Research shows that daily language learning, even for
                just 10 minutes, is more effective than learning for 60 minutes
                all at once.
              </p>
              <p className="text-gray-600 text-base">
                译：这些年龄段的孩子确实学得很快，但如果不经常接触语言，他们也会很快忘记。研究表明，每天的语言学习，即使只有10分钟，也比一下子学习60分钟更有效。
              </p>
            </div>
          </li>
          <li>
            <h3 className="flex space-x-1 text-gray-700 font-semibold text-lg">
              <SunSvg />
              <span>
                My English may not be good enough to speak to my child in
                English, and I don't want my child to learn my poor
                pronunciation.
                我的英语可能不够好，无法用英语和我的孩子说话，我不想让我的孩子学习我糟糕的发音。
              </span>
            </h3>
            <div className="mt-4 sm:pl-7 space-y-4">
              <p className="text-gray-600 text-base">
                That's why I'm here to support you with all the tools you need.
                I will provide you with my voice recordings that you can click
                on and let your child hear. As you become more comfortable with
                the phrases, you can start speaking to your child in English
                yourself if you want to.{" "}
              </p>
              <p className="text-gray-600 text-base">
                译：这就是为什么我在这里为你提供所有你需要的工具。我会提供我的录音，你可以点击让你的孩子听到。当你对这些句子越来越熟悉时，如果你愿意，就可以开始自己用英语和你的孩子说话。
              </p>
            </div>
          </li>
          <li>
            <h3 className="flex space-x-1 text-gray-700 font-semibold text-lg">
              <SunSvg />
              <span>How much does your course cost? 你的课程费用是多少?</span>
            </h3>
            <ul className="mt-3 ml-4 pl-0 sm:pl-4 space-y-2 text-gray-700 list-disc">
              <li>12-Week Course: USD $140/week</li>
              <li>24-Week Course: USD $120/week</li>
              <li>48 -Week Course: USD $100/week</li>
              <li>12周课程: 140 美元/周</li>
              <li>24周课程: 120美元/周</li>
              <li>48周课程: 100美元/周</li>
            </ul>
          </li>
          <li>
            <h3 className="flex space-x-1 text-gray-700 font-semibold text-lg">
              <SunSvg />
              <span>What does your course include?</span>
            </h3>
            <div className="mt-4 sm:pl-7 space-y-4">
              <p className="text-gray-600 text-base">
                A 50-minute coaching session once a week via Zoom.
                每周通过Zoom进行50分钟的视频指导
              </p>
              <p className="text-gray-600 text-base">
                Carefully selected weekly English video clips for your child to
                watch with you every day for at least 30 minutes.
                每周提供精心准备的视频，供您与孩子一同观看。
              </p>
              <p className="text-gray-600 text-base">
                A list of key language points from the video clips, as well as
                their Chinese translations.
                视频片段中的关键语言点，以及其中文翻译。
              </p>
              <p className="text-gray-600 text-base">
                A weekly list of daily routine phrases that your child will hear
                every day. 每周提供孩子每天需要听到的日常表达
                （诸如：该睡觉了，该吃饭了，该刷牙了，该起床了等等。 ）
              </p>
              <p className="text-gray-600 text-base">
                My voice recordings of the daily routine phrases, with each
                phrase recorded separately. This will allow the parent to click
                on the appropriate sentence for the specific scenario. For
                example, when it's time for bed, the parent can click on the
                phrase 'It's time for bed,' so that the child is naturally
                exposed to the correct English equivalent of what the parent
                would say in Chinese.
              </p>
              <p className="text-gray-600 text-base">
                常语句都是单独录音，家长可以根据具体情境点击相应的语句。例如，妈妈要提醒孩子“该睡觉了。”妈妈可以先用中文讲这句话，然后点击
                我的录音，“It's time for
                bed”，以便孩子在生活当中自然地接触到地道的英文。
              </p>
            </div>
          </li>
          <li>
            <h3 className="flex space-x-1 text-gray-700 font-semibold text-lg">
              <SunSvg />
              <span>What makes your course unique?</span>
            </h3>
            <div className="mt-4 sm:pl-7 space-y-4">
              <p className="text-gray-600 text-base">
                My course is specifically tailored to each individual child and
                their parents. Unlike other English lessons where only the child
                gets to meet the teacher, my course actively involves parents in
                their child's learning process. Parents are up-to-date on their
                child's progress and any difficulties they may be experiencing,
                and they can talk to me during the weekly Zoom session and ask
                questions.
              </p>
              <p className="text-gray-600 text-base">
                我的课程是专门为每个孩子和他们的父母量身定做的。不像其他英语课程，只有孩子才能见到老师，我的课程积极鼓励家长参与到孩子的学习过程中。家长非常了解孩子正在学什么，遇到了什么困难。他们可以在每周的Zoom会议上与我交谈并提出问题。
              </p>
              <p className="mt-5 text-gray-600 text-base">
                I offer pronunciation correction for your child. My knowledge of
                both Chinese and English enables me to understand students'
                struggles with specific sounds, allowing me to provide effective
                guidance. "The earlier bad pronunciation habits are broken, the
                earlier your child's pronunciation will become more native-like.
              </p>
              <p className="text-gray-600 text-base">
                我会为您的孩子提供发音纠正。由于我精通中英两种语言，我更容易理解学生在特定发音方面的困难，并提供有效的指导。越早打破错误的发音习惯，孩子的发音就会越早变得更地道。
              </p>
              <p className="mt-5 text-gray-600 text-base">
                Your child will not only be learning English in zoom sessions
                with me, but also through carefully designed daily English input
                at home. This immersive learning approach allows your child to
                absorb English naturally, without even realizing it. At this
                age, children have a remarkable ability to learn multiple
                languages simultaneously.
              </p>
              <p className="text-gray-600 text-base">
                您的孩子不仅可以通过Zoom跟我学习英语，还可以在家里通过精心设计的日常英语输入来学习英语。这种沉浸式学习方法可以让你的孩子在不知不觉中自然地吸收英语。在这个年龄段，孩子们具有非凡的能力同时学习多种语言。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
