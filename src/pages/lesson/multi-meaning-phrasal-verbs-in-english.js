export default function DetailPage() {
  return (
    <div className="container lg:max-w-screen-lg mx-auto sm:px-5 lg:px-0">
      <h1 className="my-10 px-5 sm:px-0 text-2xl font-bold text-gray-800">付费课程</h1>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 bg-white sm:rounded-2xl shadow overflow-hidden">
        <figure className="lg:max-w-[65%] overflow-hidden">
          <img
            className="w-full sm:w-auto h-full object-fill"
            src="/static/img/cover/phrasal-verbs.jpg"
            alt="解锁英语口语中多义动词短语的力量：掌握常用用法"
            width="666"
            height="374"
          />
        </figure>
        <div className="flex-1 flex flex-col justify-between">
          <div className="px-5 lg:px-0 lg:mr-5">
            <h1 className="lg:mt-4 text-gray-800 font-semibold text-xl">
              Unlocking the Power of Multi-Meaning Phrasal Verbs in spoken
              English: Mastering Common Usage
            </h1>
            <h2 className="text-gray-700 font-semibold text-lg">
              解锁英语口语中多义动词短语的力量：掌握常用用法
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
        <h2 className="text-gray-800 font-semibold text-xl">课程描述</h2>
        <p className="my-5 text-gray-600 font-medium text-base">
          你是否正在为了用英语沟通而苦恼？你是否想知道母语人士是如何自然地表达自己的？你是否想讲出地道自然的英文口语,
          而不是生硬的中式英语？
        </p>
        <p className="my-5 text-gray-600 font-medium text-base">
          很多学生误以为自己单词量不够。殊不知答案就在英文动词短语中。英文母语者在日常交谈中大量使用动词短语。动词短语在口语中非常普遍。据统计，在日常对话中，70%-80%的动词都是以动词短语的形式出现的。所以，掌握英语动词短语是有效提高英语交流技能的关键。
        </p>
        <p className="my-5 text-gray-600 font-medium text-base">
          那么问题来了：很多英语短语动词都因其多重含义而臭名昭著，让英语学习者摸不着头脑。如果你也正在为此苦恼，祝贺你！你来对地方了。这套课程通过视频和音频形式呈现大量的最常用生活例句，旨在帮助学生通过实际语境学到原滋原味英语口语，熟悉英文母语者的发音，轻松记住它们的不同含义。只要你不断练习，就一定能够流利使用这些动词短语，开启一个全新的沟通世界。
        </p>
      </div>

      <div className="mt-10 rounded-md bg-white p-4 shadow">
        <h2 className="text-gray-800 font-semibold text-xl">课程目录</h2>
        <ul className="mt-5 text-gray-600 font-medium text-base space-y-2">
          <li>第1期 – 高頻 【片語動詞/動詞短語】 【pick up】</li>
          <li>第2期 – 高頻 【片語動詞/動詞短語】 【come up】</li>
          <li>第3期 – 高頻 【片語動詞/動詞短語】 【take off】</li>
          <li>第4期 – 高頻 【片語動詞/動詞短語】 【put on】</li>
          <li>第5期 – 高頻 【片語動詞/動詞短語】 【put in】(3 月)</li>
          <li>第6期 – 高頻 【片語動詞/動詞短語】 【put out】（3月）</li>
          <li>第7期 – 高頻 【片語動詞/動詞短語】 【work out】（4月）</li>
          <li>第8期 – 高頻 【片語動詞/動詞短語】 【work on】（4月）</li>
          <li>第9期 – 高頻 【片語動詞/動詞短語】 【come across 】（5月）</li>
          <li>第10期 – 高頻 【片語動詞/動詞短語】 【go through】（5月）</li>
          <li>第11期 – 高頻 【片語動詞/動詞短語】 【go for 】（6月）</li>
          <li>第12期 – 高頻 【片語動詞/動詞短語】 【go out】（6月）</li>
        </ul>
      </div>
    </div>
  );
}
