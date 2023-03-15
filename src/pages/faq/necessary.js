import Head from "next/head";

export default function AboutPage() {
  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>购买须知</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="关于购买后，如何收到和使用HannahLin English的视频课程"
        />
        <meta
          name="keywords"
          content="购买须知，常见问题，视频课程，HannahLin English"
        />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content="购买须知" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/logo.png"
        />
        <meta
          property="og:description"
          content="关于购买后，如何收到和使用HannahLin English的视频课程"
        />
      </Head>

      <h1 className="my-10 text-2xl font-bold text-slate-600">购买须知</h1>

      <section className="rounded-md bg-white px-5 py-4 shadow">
        <article>
          <h2 className="text-gray-600 text-base font-medium">
            1. 会怎么收到视频？
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            支付成功后，24-48小时内，您将会从您购买时提供的邮箱里收到课程视频链接。如果您没有收到邮件，请检查您的邮件垃圾箱。
          </p>
        </article>

        <article className="mt-5">
          <h2 className="text-gray-600 text-base font-medium">
            2. 能否下载付费视频？
          </h2>
          <p className="mt-3 text-gray-600 text-sm">不能。</p>
        </article>
      </section>
    </div>
  );
}
