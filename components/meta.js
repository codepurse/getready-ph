import Head from "next/head";
export default ({
  props = { title: "", description: "", image: "", url: "", keywords: "" }
}) => (
    <div>
      <Head>
        <title>{props.title || "GetReady - Emergency Preparedness"}</title>
        <meta
          name="description"
          content={
            props.description ||
            " It is time to start getting prepared. It is time for GetReadyPH!"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={props.title || "GetReady - Emergency Preparedness"}
        />
        <meta
          property="og:description"
          content={props.description || "GetReady - Emergency Preparedness"}
        />
        <meta
          property="og:image"
          content={
            props.image || "https://getreadyph.com"
          }
        />
        <meta
          property="og:image:secure_url"
          content={props.image || "https://getreadyph.com"}
        />
        <meta property="og:image:type" content="image/jpeg" />
        {/* <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" /> */}
        <meta property="og:url" content={props.url || "https://getreadyph.com"} />

        <link href="/Css/bootstrap.min.css" rel="stylesheet" type="text/css" key="bootstrap-css" />
        <script src="/Script/jquery-3.3.1.min.js" key="jquery-js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="/Script/bootstrap.min.js" key="bootstrap-js"></script>

      </Head>
    </div>
  );
