export default { data: [  // should be api call
    {
      id: "1",
      title: "Graph embeddings",
      thumb_url: "/images/projects/datasci/thumb/node2vec.png",
      html_body: `
        <br>
        <p> Extracting social network information using graph embedding methods</p>

         Graph embedding technics are studied with intereston public datasets, such as BlogCatalog, with the common practiceof maximizing scoring on graph reconstruction, link predictionmetrics etc. However, in the financial sector the important metricsare often more business related, for example fraud detection rates.With our privileged position of having large amount of real-worldnon-public P2P-lending social data, we aim to study empiricallywhether recent advances in graph embedding technics provide auseful signal for metrics more closely related to business interests,such as fraud detection rate.
         <br>
         (Technologies used: Python, neo4j, hive, jupyter, scikit-learn, SNAP, docker) <br>
         (subsampled data ~1e6 out of ~1e8) <br> <br>

         <hr width="100%" style="margin: 5px 0;">
          <p>Data pipeline:</p>
          <img src="/images/projects/datasci/data_pipeline.png" width="70%" alt="" class="well"> <br>
         <hr width="100%" style="margin: 5px 0;">
          <p>Embedding visualization:</p>
          <img src="/images/projects/datasci/node2vec.png" width="40%" alt="" class="well"> <br>
          <p>More info available upon request</p>
        <br>
        <a href="https://arxiv.org/abs/1903.05976">
          <button type="button" class="btn btn-info"> <span class="glyphicon glyphicon-link" aria-hidden="true"></span> Link to paper</button>
        </a>
      `
    },

    {
      id: "2",
      title: "Spark graphx",
      thumb_url: "/images/projects/datasci/thumb/neo4j.png",
      html_body: `
        <br>
          <p> Building platform for big graph data </p>
          Building a development and test platform for running graph algorithms on big data. Tasks include configuring Docker, spark and neo4j, matching versions and doing performance benchmarks and tuning. Test environment successfully simulated with docker: one hadoop/spark cluster with 1 master, 2 slaves; one neo4j server; one scala client connecting to the cluster using yarn. Successfully connected to production spark cluster.
         <br>
         (Technologies used: Docker, Jupyter(Scala), neo4j, Spark(graphx), yarn, hadoop, linux) <br>
         (data max size tested ~7e7, unresolved issues in scalability, hopefully newer version of spark will be the fix) <br> <br>

         <hr width="100%" style="margin: 5px 0;">
          <p>neo4j:</p>
          <img src="/images/projects/datasci/neo4j.png" width="40%" alt="" class="well"> <br>
         <hr width="100%" style="margin: 5px 0;">
          <p>spark graphx:</p>
          <img src="/images/projects/datasci/spark_dag.png" width="70%" alt="" class="well"> <br>
          <p>More info available upon request</p>
      `
    },

    {
      id: "3",
      title: "debt modelling",
      thumb_url: "/images/projects/datasci/thumb/scorecard.png",
      html_body: `
        <br>
          <p> Debt collections modelling </p>
          Modelling to rank which debts are easier to collect using various strategy, e.g scorecard. Constructed a custom metric based on MAP to rank different strategies.
         <br>
         (Technologies used: Python, scikit-learn, scorecard, math) <br> <br>

         <hr width="100%" style="margin: 5px 0;">
          <p>Score card:</p>
          <img src="/images/projects/datasci/scorecard.png" width="45%" alt="" class="well"> <br>
         <hr width="100%" style="margin: 5px 0;">
          <p>MAP notes:</p>
          <img src="/images/projects/datasci/MAP.png" width="55%" alt="" class="well"> <br>
          <p>More info available upon request</p>
      `
    },

    {
      id: "4",
      title: "stock modelling",
      thumb_url: "/images/projects/datasci/thumb/globex.png",
      html_body: `
        <br>
          <p> Modelling S&P 500 index </p>
          Attempting to predict S&P 500 index prices for day trading. Method is based on scikit-learn and a momentum based indicator published in a thesis from Oxford.
         <br>
         (Technologies used: Python, scikit-learn, hypteropt, tpot) <br><br>

         <hr width="100%" style="margin: 5px 0;">
          <p>Final attempt:</p>
          <img src="/images/projects/datasci/globex.png" width="35%" alt="" class="well"> <br>
          <p>More info available upon request</p>
      `
    }
  ]
}
