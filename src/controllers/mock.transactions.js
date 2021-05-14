const luxon = require("luxon");

const transactions = [
  {
    transactionCode: "eee9a57cf7a8df56709bfa0f45808a27",
    userId: 3,
    transactionType: "receiver",
    description: "Maique Rosa",
    transactionDate: luxon.DateTime.fromJSDate(new Date()).minus({ day: 1 }),
    value: 1170.86,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "567f85f87f3493e69103c25c404ebbaf",
    userId: 2,
    transactionType: "transfer",
    description: "Leticia Souza",
    transactionDate: "2020-08-31T22:53:49Z",
    value: 455.76,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "100ce47493de4ad02cb9d80dc0432a77",
    userId: 1,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-09-10T03:08:06Z",
    value: 164.37,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "60aff3cbac402b2ce10f3a26704f032b",
    userId: 4,
    transactionType: "transfer",
    description: "Wendell Maschette",
    transactionDate: luxon.DateTime.fromJSDate(new Date()).minus({ day: 1 }),
    value: 1299.7,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "83b371433ef7b0cc9e4acf0c2987b7ce",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: new Date().toISOString(),
    value: 60.75,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "d35dba9f84f3480df45b3083fd51d359",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-07-04T18:21:52Z",
    value: 54.43,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "c12c027d1530891e448388cd409cb7c7",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-12-15T14:33:59Z",
    value: 1133.38,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "835ac0ccdc06786d72aaa476ab0f92c9",
    userId: 4,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-06-02T00:27:09Z",
    value: 296.21,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "0ac4ad13025f496fe8513b15d37cc784",
    userId: 3,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-12-08T03:39:08Z",
    value: 796.65,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "2705bd969d57ae9e6cfcf5c655b94f47",
    userId: 1,
    transactionType: "receiver",
    description: "Pagamento de titulo",
    transactionDate: "2020-08-09T16:28:48Z",
    value: 786.22,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "cdb0eb286c216a79ecc442805cefe9e8",
    userId: 1,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2021-03-24T23:12:33Z",
    value: 502.95,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "5ce27f13153e2d5d6dfa7be05b32b769",
    userId: 2,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2021-04-15T06:41:05Z",
    value: 374.06,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "12bd23748bec983e364e1a4376ac93b0",
    userId: 4,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-08-06T08:16:09Z",
    value: 801.8,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "d18cf0dd50920aaa6107709b1f959d0b",
    userId: 4,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-05-22T23:28:25Z",
    value: 291.27,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "b5a007bdf303bee599b44c669bb454f6",
    userId: 3,
    transactionType: "receiver",
    description: "Maique Rosa",
    transactionDate: "2020-07-04T05:14:56Z",
    value: 540.49,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "225aef168ccfb6fabdd2719fa3cf1683",
    userId: 4,
    transactionType: "receiver",
    description: "Wendell Maschette",
    transactionDate: "2020-12-12T16:16:38Z",
    value: 789.27,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "690fc8faf67521869fb16a41e6224769",
    userId: 2,
    transactionType: "transfer",
    description: "Leticia Souza",
    transactionDate: "2020-11-29T00:23:01Z",
    value: 36.11,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "92bc5978cabafe6f6d03cd24fe49419b",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-07-10T13:05:14Z",
    value: 1178.03,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "475f8dccafa9464629c4a2529b23bb85",
    userId: 3,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-07-08T11:41:08Z",
    value: 379.09,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "2de26ab926cd47bafaa095c2dd67bf4b",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-10-29T09:57:50Z",
    value: 1029.83,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "6552ce5be5ff5a5962eae80401187cad",
    userId: 4,
    transactionType: "transfer",
    description: "Wendell Maschette",
    transactionDate: "2021-04-28T02:45:13Z",
    value: 811.24,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "8514a8d5609f5c03287829f4b473b9d2",
    userId: 3,
    transactionType: "receiver",
    description: "Maique Rosa",
    transactionDate: "2021-01-15T18:51:22Z",
    value: 687.96,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "10ba28c192ee2135e1de53f6fc08c943",
    userId: 1,
    transactionType: "transfer",
    description: "Ademar Santos",
    transactionDate: "2020-10-28T23:36:52Z",
    value: 687.9,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "ea7f92943c47456539677017d2dd217d",
    userId: 2,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-12-30T05:23:35Z",
    value: 979.56,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "a6bd9958d2b0e22e2d9540f7b2fc6083",
    userId: 2,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2021-03-07T04:17:46Z",
    value: 672.74,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "b9c81f2af9e2398b6a865cd6cc5bb06e",
    userId: 1,
    transactionType: "receiver",
    description: "Pagamento de titulo",
    transactionDate: "2020-08-19T19:00:05Z",
    value: 382.55,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "2ac78e21a79d60f50b2726cd61ce26f5",
    userId: 4,
    transactionType: "receiver",
    description: "Wendell Maschette",
    transactionDate: "2020-11-30T19:01:20Z",
    value: 402.61,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "2ae8528b94cfba002e47e2a02b3e6b58",
    userId: 3,
    transactionType: "receiver",
    description: "Maique Rosa",
    transactionDate: "2020-12-05T21:29:20Z",
    value: 259.96,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "62876744051554ee3bbd3f81ccc92630",
    userId: 3,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-07-02T09:29:51Z",
    value: 661.5,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "340f6f0a4d1a11a6fdaf4f19969f9dcd",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-06-06T19:46:31Z",
    value: 698.0,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "af28a9e654252fb1146dbc0941842a22",
    userId: 3,
    transactionType: "transfer",
    description: "Maique Rosa",
    transactionDate: "2020-09-16T00:23:34Z",
    value: 249.49,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "5e025c8202a7ffb0c42483a39d998a41",
    userId: 3,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-08-10T17:15:16Z",
    value: 548.05,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "42d1d5a4b19e7f3660ee06116fb85b64",
    userId: 2,
    transactionType: "receiver",
    description: "Leticia Souza",
    transactionDate: "2020-12-31T08:57:26Z",
    value: 958.45,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "0343ef0a07159cd8a9bed51e199804ee",
    userId: 3,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2021-03-29T08:12:59Z",
    value: 813.57,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "2a7d24918515f087d7fa1342a8dbb3e7",
    userId: 2,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2021-03-08T13:28:38Z",
    value: 884.76,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "4f380d2ea9ce833227c793b82d46342e",
    userId: 4,
    transactionType: "receiver",
    description: "Wendell Maschette",
    transactionDate: "2020-06-15T22:55:35Z",
    value: 858.12,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "5ea43d4299dd85cdfa662db0f95e6b11",
    userId: 1,
    transactionType: "transfer",
    description: "Ademar Santos",
    transactionDate: "2020-05-17T21:03:09Z",
    value: 1381.83,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "7c63a7c37def62888c9e7862c8b07d83",
    userId: 2,
    transactionType: "receiver",
    description: "Leticia Souza",
    transactionDate: "2020-12-07T03:50:44Z",
    value: 1339.85,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "5e6e3b7951f072b82b26925f8c5ae1bf",
    userId: 3,
    transactionType: "transfer",
    description: "Maique Rosa",
    transactionDate: "2020-06-24T22:55:02Z",
    value: 363.15,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "a3ecc6f4aadf9c273e47436ea267678d",
    userId: 3,
    transactionType: "receiver",
    description: "Maique Rosa",
    transactionDate: "2021-02-24T01:59:13Z",
    value: 379.92,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "bfef08e9a1d23f0a2eafbd7b72372a35",
    userId: 1,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-10-02T16:11:18Z",
    value: 712.55,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "389cb2aeb1f5de34a04eefef06e56b46",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2021-02-04T14:01:30Z",
    value: 753.01,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "f5bfea13a680013840d32576f4c3c570",
    userId: 3,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-09-15T23:38:05Z",
    value: 965.58,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "ba49520a21b8db8e3e3109190bf863a5",
    userId: 2,
    transactionType: "receiver",
    description: "Leticia Souza",
    transactionDate: "2020-06-22T12:09:38Z",
    value: 1481.67,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "c2d746240b6193ca7a426e7c3d2046e5",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-10-22T17:13:31Z",
    value: 389.47,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "87edeaa0fab4cc4acccf8b7f680e8d61",
    userId: 3,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-05-18T23:15:41Z",
    value: 458.16,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "5560541e68f55cdb213c944846bda0fa",
    userId: 3,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2021-01-30T00:50:24Z",
    value: 1411.42,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "a27753d84ffcc6cca71b827da30aad20",
    userId: 3,
    transactionType: "transfer",
    description: "Maique Rosa",
    transactionDate: "2020-10-17T15:56:08Z",
    value: 148.76,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "48d227b0b6841aeda3a256f5806fd4cc",
    userId: 3,
    transactionType: "receiver",
    description: "Maique Rosa",
    transactionDate: "2021-02-06T00:19:18Z",
    value: 1359.43,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "83dc32f663ceb6e08c2be76c4caa4ee4",
    userId: 2,
    transactionType: "transfer",
    description: "Leticia Souza",
    transactionDate: "2021-01-27T21:48:49Z",
    value: 159.27,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "1cd6ccb20a4f05cb0da5370749dadf95",
    userId: 1,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-07-12T20:52:35Z",
    value: 503.19,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "981c0b24a97ec5400a8e5869013da514",
    userId: 3,
    transactionType: "receiver",
    description: "Maique Rosa",
    transactionDate: "2020-05-14T00:40:15Z",
    value: 442.92,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "6adf81e5069848428a3696fde47238e1",
    userId: 4,
    transactionType: "transfer",
    description: "Wendell Maschette",
    transactionDate: "2021-04-07T18:00:26Z",
    value: 199.19,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "005e2b1967515f7f2e19f01659630780",
    userId: 2,
    transactionType: "transfer",
    description: "Leticia Souza",
    transactionDate: "2020-11-08T08:32:06Z",
    value: 330.18,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "5811ca1151edd9d83323a02fcacec4f4",
    userId: 4,
    transactionType: "receiver",
    description: "Wendell Maschette",
    transactionDate: "2020-12-24T23:06:18Z",
    value: 208.64,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "ccd9fafa737483ac1a1d47847c042186",
    userId: 3,
    transactionType: "transfer",
    description: "Maique Rosa",
    transactionDate: "2021-04-12T13:07:25Z",
    value: 89.87,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "abd71d69142b76ff8c3121a7813d4d3c",
    userId: 4,
    transactionType: "transfer",
    description: "Wendell Maschette",
    transactionDate: "2020-08-09T14:07:53Z",
    value: 144.32,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "6ca9585ff4fbe695496bb447ffbf29e5",
    userId: 2,
    transactionType: "receiver",
    description: "Leticia Souza",
    transactionDate: "2021-02-12T05:48:47Z",
    value: 190.88,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "96ccacda1c271fd5adc4a24fe110e55c",
    userId: 1,
    transactionType: "transfer",
    description: "Ademar Santos",
    transactionDate: "2020-09-11T19:07:26Z",
    value: 1237.42,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "77fd6a6a7977a470f43c83fd61b323a5",
    userId: 2,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-07-18T02:50:29Z",
    value: 468.17,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "eadd017e9d7edcb11801e14478a897f1",
    userId: 2,
    transactionType: "transfer",
    description: "Leticia Souza",
    transactionDate: "2021-03-23T21:43:51Z",
    value: 129.97,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "15938b9936408e632673964aeade4512",
    userId: 1,
    transactionType: "transfer",
    description: "Ademar Santos",
    transactionDate: "2020-06-05T15:21:51Z",
    value: 52.58,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "ff5052b23ba980a8ec53fdbecbec19c3",
    userId: 4,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2021-01-16T16:01:20Z",
    value: 281.6,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "cfd05ae7ec691285447ad4385913b894",
    userId: 3,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-12-04T13:02:17Z",
    value: 1297.87,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "88df9df964364a5761eff3a4431abf8a",
    userId: 1,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-09-16T14:51:33Z",
    value: 528.76,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "58fb2d5cf25768ceb8324665dd856270",
    userId: 1,
    transactionType: "receiver",
    description: "Pagamento de titulo",
    transactionDate: "2020-08-06T09:32:56Z",
    value: 618.43,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "bbfb4f213368afcb21ec168c86792624",
    userId: 3,
    transactionType: "transfer",
    description: "Maique Rosa",
    transactionDate: "2021-01-13T03:38:23Z",
    value: 1208.35,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "66203353dc335bf77e4015a2a9960055",
    userId: 4,
    transactionType: "transfer",
    description: "Wendell Maschette",
    transactionDate: "2020-05-09T07:55:06Z",
    value: 75.66,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "1d470c4249ab4131e0399bb705ec2217",
    userId: 2,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-12-07T06:52:29Z",
    value: 814.39,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "d2c410feb9812f902656e2ca9900a6a5",
    userId: 2,
    transactionType: "transfer",
    description: "Leticia Souza",
    transactionDate: "2020-10-08T20:42:04Z",
    value: 53.7,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "96eb912582a1f46fa9909e87e2369142",
    userId: 3,
    transactionType: "transfer",
    description: "Maique Rosa",
    transactionDate: "2021-04-12T10:17:59Z",
    value: 1034.44,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "ccb2eb3bdac9c37d46dadf586539b308",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-09-17T06:03:14Z",
    value: 227.14,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "f2d5cc3c15142504aa750b045f7d1fcf",
    userId: 4,
    transactionType: "receiver",
    description: "Wendell Maschette",
    transactionDate: "2020-06-07T12:44:56Z",
    value: 1132.1,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "fdd189168a339c249721323eeadb9714",
    userId: 4,
    transactionType: "receiver",
    description: "Wendell Maschette",
    transactionDate: "2021-01-08T07:48:59Z",
    value: 1285.87,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "543b3195ebbc0a175203f122ed354388",
    userId: 4,
    transactionType: "receiver",
    description: "Wendell Maschette",
    transactionDate: "2020-07-27T08:31:21Z",
    value: 1026.73,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "1ef859c828fc3cd394bf8bc776e17b00",
    userId: 4,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2021-05-05T06:03:57Z",
    value: 653.25,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "72bf65b0957d2a84e7aa4bf18e94b575",
    userId: 3,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-11-08T23:52:07Z",
    value: 1017.32,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "ca4b14af16d57f3a57dd3cb6bf7f140f",
    userId: 4,
    transactionType: "transfer",
    description: "Wendell Maschette",
    transactionDate: "2021-01-01T17:16:20Z",
    value: 1448.56,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "3605192fa79091132b4c8dee537a0803",
    userId: 1,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-06-07T08:36:42Z",
    value: 911.58,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "a3b6859386b4c09f3b6b70058f3cb4d1",
    userId: 4,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-12-30T07:53:22Z",
    value: 88.25,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "949815d6c0452bec29cc0f07a50f75bc",
    userId: 3,
    transactionType: "receiver",
    description: "Maique Rosa",
    transactionDate: "2020-09-03T19:59:24Z",
    value: 1297.36,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "dc0c934f02b84dce533a3add766722ff",
    userId: 1,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2021-02-11T08:17:24Z",
    value: 20.94,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "ed93af82f4fb7700c1608f39135274f6",
    userId: 2,
    transactionType: "transfer",
    description: "Leticia Souza",
    transactionDate: "2020-09-13T16:53:46Z",
    value: 1303.28,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "09a8f757bb7ef5275cb390084ad304aa",
    userId: 3,
    transactionType: "receiver",
    description: "Maique Rosa",
    transactionDate: "2020-09-13T02:35:17Z",
    value: 263.86,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "39f9485a650caae42ebacbd23c959a31",
    userId: 1,
    transactionType: "transfer",
    description: "Ademar Santos",
    transactionDate: "2021-01-21T10:28:05Z",
    value: 594.86,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "81b2ddf48bed850a6ab3de62caacc170",
    userId: 2,
    transactionType: "receiver",
    description: "Leticia Souza",
    transactionDate: "2021-01-18T23:40:00Z",
    value: 102.49,
    moneyFlow: "CREDIT",
  },
  {
    transactionCode: "288a65b939d0265c123e21018fa07ede",
    userId: 3,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2021-03-07T18:53:57Z",
    value: 242.22,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "fa6e2837a478e170b1efafefb8837087",
    userId: 1,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-05-24T01:29:39Z",
    value: 705.69,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "616118a8ab0a6acf7865a3b276d45c7e",
    userId: 3,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-11-16T05:48:20Z",
    value: 625.04,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "cf785ade850ee17ad8dcf4ae1d4aa1ea",
    userId: 4,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-11-29T19:28:20Z",
    value: 791.48,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "c64f5272ad645d40708dca5e28a7c6da",
    userId: 4,
    transactionType: "transfer",
    description: "Wendell Maschette",
    transactionDate: "2020-12-07T06:19:12Z",
    value: 212.13,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "7f94eab4a44d8d5ea21cd778cba25527",
    userId: 1,
    transactionType: "transfer",
    description: "Ademar Santos",
    transactionDate: "2021-03-21T06:13:11Z",
    value: 854.74,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "df1f6bee0af17d1c9d6d9be3be4d6181",
    userId: 2,
    transactionType: "transfer",
    description: "Leticia Souza",
    transactionDate: "2021-03-16T17:46:37Z",
    value: 457.19,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "36df734cf4dac41f2c38821d8046b119",
    userId: 3,
    transactionType: "qrCode",
    description: "Pagamento de titulo",
    transactionDate: "2020-10-26T01:10:12Z",
    value: 1126.46,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "3fb637dc424c005d6f0fe8dcb2abd7b4",
    userId: 2,
    transactionType: "cashIn",
    description: "Crédito Boleto",
    transactionDate: "2020-12-18T13:36:57Z",
    value: 1394.86,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "c3c1bd2c043cd7a9d993070bd4b787d9",
    userId: 3,
    transactionType: "transfer",
    description: "Maique Rosa",
    transactionDate: "2020-09-15T04:17:30Z",
    value: 1100.89,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "17eb935ed6e3ae2e670e6ab05be166b3",
    userId: 4,
    transactionType: "transfer",
    description: "Wendell Maschette",
    transactionDate: "2020-08-18T16:37:25Z",
    value: 1011.99,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "9fc5749c74d0e168d4e957587cc026e0",
    userId: 1,
    transactionType: "transfer",
    description: "Ademar Santos",
    transactionDate: "2020-07-14T18:36:43Z",
    value: 560.61,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "35675b7d5efcb6672889d753a88459f9",
    userId: 1,
    transactionType: "transfer",
    description: "Ademar Santos",
    transactionDate: "2020-12-26T21:24:31Z",
    value: 526.98,
    moneyFlow: "DEBIT",
  },
  {
    transactionCode: "1a667d509411f977b9565ee873ed1fd6",
    userId: 2,
    transactionType: "receiver",
    description: "Leticia Souza",
    transactionDate: "2021-01-13T11:12:49Z",
    value: 616.61,
    moneyFlow: "CREDIT",
  },
];
module.exports = transactions;
