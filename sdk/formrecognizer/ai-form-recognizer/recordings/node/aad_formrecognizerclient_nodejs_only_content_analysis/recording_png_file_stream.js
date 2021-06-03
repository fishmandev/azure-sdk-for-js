let nock = require('nock');

module.exports.hash = "25abf57322f5779ee97693db4d852606";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '34cadc37-9713-4b49-9e5f-bb6cb3686501',
  'x-ms-ests-server',
  '2.1.11722.21 - WUS2 ProdSlices',
  'Set-Cookie',
  'fpc=ApkDqNpQ57tNkXRRzlIgAuCU1ubLBAAAAEU0P9gOAAAA; expires=Thu, 24-Jun-2021 18:09:52 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrEFYmv_nq6rLc9E0NjIY7fGut7_JBZ8zbg-fVnF9sjpYA06hmjQL6onYxTzorjFf_-nGMuQVL6zBPm8y_tNLFdb5GbE-kwI3C2W-ZN5StnOJU0RnzNwJOhRCvvTLqS3lR6JiEDQiZppCbBbuPCeMCWg7LT3C04LYa85NNg5qP1RggAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 25 May 2021 18:09:51 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '1a1715eb-17cf-443c-96ea-32225c881c00',
  'x-ms-ests-server',
  '2.1.11774.11 - SCUS ProdSlices',
  'Set-Cookie',
  'fpc=ApkDqNpQ57tNkXRRzlIgAuCU1ubLBAAAAEU0P9gOAAAA; expires=Thu, 24-Jun-2021 18:09:52 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrT2wh3Tjlzn9oHYKe_OqhTtelNj0HoF3gzr5-oRkLVv5L8y2Ri5QwRGQ62wg-cf5EJK7Sf7LY6UUI212Q6YMy9WjyTnzFRSf4av9nlVCFf06WjklNFrT4bS7iRPacuMIofkMG0bc7Eqk1W7lQ8SoX7ojHThKqAABtBDg_f8lUV6kgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 25 May 2021 18:09:51 GMT',
  'Content-Length',
  '1651'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fcognitiveservices.azure.com%2F.default%20openid%20profile%20offline_access&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.1.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=2|771,0|,&x-client-last-telemetry=2|0|||0,0&client-request-id=97dcf613-17b0-4956-808f-8e92f2f97ab3&client_secret=azure_client_secret")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '971386c2-b787-48ec-be1b-3c0018a61a00',
  'x-ms-ests-server',
  '2.1.11774.11 - SCUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=ApkDqNpQ57tNkXRRzlIgAuCU1ubLBQAAAEU0P9gOAAAA; expires=Thu, 24-Jun-2021 18:09:52 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 25 May 2021 18:09:51 GMT',
  'Content-Length',
  '1331'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1/layout/analyzeResults/ddcfe26d-6d1f-4e8f-a041-0781e51a183a',
  'x-envoy-upstream-service-time',
  '329',
  'apim-request-id',
  'ddcfe26d-6d1f-4e8f-a041-0781e51a183a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 25 May 2021 18:09:53 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/layout/analyzeResults/ddcfe26d-6d1f-4e8f-a041-0781e51a183a')
  .reply(200, {"status":"running","createdDateTime":"2021-05-25T18:09:54Z","lastUpdatedDateTime":"2021-05-25T18:09:54Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '11',
  'apim-request-id',
  '05ea5c40-27da-4724-82ac-5909ad436488',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 25 May 2021 18:09:53 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/layout/analyzeResults/ddcfe26d-6d1f-4e8f-a041-0781e51a183a')
  .reply(200, {"status":"running","createdDateTime":"2021-05-25T18:09:54Z","lastUpdatedDateTime":"2021-05-25T18:09:54Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '13',
  'apim-request-id',
  '084a0863-6a8c-46da-922f-6d7ddf4ce64d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 25 May 2021 18:09:53 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/layout/analyzeResults/ddcfe26d-6d1f-4e8f-a041-0781e51a183a')
  .reply(200, {"status":"succeeded","createdDateTime":"2021-05-25T18:09:54Z","lastUpdatedDateTime":"2021-05-25T18:09:56Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":0.3356,"width":1688,"height":3000,"unit":"pixel","lines":[{"boundingBox":[620,291,1048,288,1049,384,621,389],"text":"Contoso","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[620,292,1035,290,1037,380,623,389],"text":"Contoso","confidence":0.996}]},{"boundingBox":[326,589,499,601,496,651,323,640],"text":"Contoso","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[328,590,500,601,497,651,324,640],"text":"Contoso","confidence":0.92}]},{"boundingBox":[314,690,650,694,649,754,314,751],"text":"123 Main Street","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[318,690,382,693,378,752,314,748],"text":"123","confidence":0.994},{"boundingBox":[393,694,496,697,493,754,390,752],"text":"Main","confidence":0.987},{"boundingBox":[507,697,649,697,648,751,505,754],"text":"Street","confidence":0.996}]},{"boundingBox":[311,796,751,796,751,854,311,855],"text":"Redmond, WA 98052","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[313,796,520,799,519,856,311,851],"text":"Redmond,","confidence":0.783},{"boundingBox":[531,799,598,799,598,855,530,856],"text":"WA","confidence":0.997},{"boundingBox":[609,799,749,797,750,848,609,855],"text":"98052","confidence":0.996}]},{"boundingBox":[307,1004,619,1010,618,1068,306,1061],"text":"123-456-7890","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[308,1005,620,1012,616,1068,306,1063],"text":"123-456-7890","confidence":0.985}]},{"boundingBox":[301,1222,631,1224,630,1290,301,1287],"text":"6/10/2019 13:59","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[302,1223,495,1224,495,1290,301,1289],"text":"6/10/2019","confidence":0.994},{"boundingBox":[508,1224,630,1228,629,1290,508,1290],"text":"13:59","confidence":0.983}]},{"boundingBox":[301,1335,769,1338,768,1396,300,1393],"text":"Sales Associate: Paul","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[301,1336,408,1336,407,1393,301,1393],"text":"Sales","confidence":0.994},{"boundingBox":[419,1336,649,1337,648,1396,419,1393],"text":"Associate:","confidence":0.984},{"boundingBox":[660,1338,769,1338,768,1397,659,1396],"text":"Paul","confidence":0.991}]},{"boundingBox":[333,1560,674,1562,674,1620,332,1618],"text":"1 Surface Pro 6","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[334,1560,352,1561,351,1619,333,1619],"text":"1","confidence":0.996},{"boundingBox":[364,1561,542,1562,540,1620,363,1619],"text":"Surface","confidence":0.996},{"boundingBox":[553,1562,627,1563,625,1621,552,1620],"text":"Pro","confidence":0.97},{"boundingBox":[638,1563,672,1563,671,1621,637,1621],"text":"6","confidence":0.996}]},{"boundingBox":[369,1672,846,1674,846,1739,369,1736],"text":"256GB / Intel Core i5 /","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[370,1673,501,1673,500,1737,370,1734],"text":"256GB","confidence":0.986},{"boundingBox":[513,1673,529,1673,528,1737,512,1737],"text":"/","confidence":0.787},{"boundingBox":[540,1673,644,1673,643,1739,540,1738],"text":"Intel","confidence":0.947},{"boundingBox":[656,1673,756,1674,754,1739,655,1739],"text":"Core","confidence":0.988},{"boundingBox":[768,1674,804,1674,801,1739,766,1739],"text":"i5","confidence":0.968},{"boundingBox":[816,1674,845,1674,842,1739,813,1739],"text":"/","confidence":0.958}]},{"boundingBox":[368,1784,731,1784,730,1853,368,1849],"text":"8GB RAM (Black)","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[368,1785,445,1785,445,1849,369,1847],"text":"8GB","confidence":0.996},{"boundingBox":[457,1785,558,1785,559,1852,458,1849],"text":"RAM","confidence":0.997},{"boundingBox":[570,1785,730,1785,730,1854,571,1852],"text":"(Black)","confidence":0.995}]},{"boundingBox":[977,1796,1130,1800,1128,1854,977,1849],"text":"999.00","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[977,1796,1128,1800,1127,1854,977,1849],"text":"999.00","confidence":0.994}]},{"boundingBox":[317,2018,627,2013,628,2073,318,2080],"text":"1 SurfacePen","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[317,2021,340,2020,342,2080,320,2080],"text":"1","confidence":0.996},{"boundingBox":[352,2019,625,2014,626,2075,354,2080],"text":"SurfacePen","confidence":0.994}]},{"boundingBox":[1004,2031,1130,2031,1129,2090,1004,2089],"text":"99.99","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[1007,2031,1130,2031,1130,2090,1007,2090],"text":"99.99","confidence":0.986}]},{"boundingBox":[278,2168,321,2168,322,2180,278,2181],"text":"--","appearance":{"style":{"name":"other","confidence":0.821}},"words":[{"boundingBox":[279,2168,308,2169,308,2181,278,2182],"text":"--","confidence":0.826}]},{"boundingBox":[471,2243,698,2245,697,2307,471,2304],"text":"Sub-Total","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[471,2243,696,2245,694,2307,472,2305],"text":"Sub-Total","confidence":0.994}]},{"boundingBox":[926,2262,1135,2255,1137,2314,927,2318],"text":"$ 1098.99","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[926,2269,950,2267,952,2317,929,2316],"text":"$","confidence":0.994},{"boundingBox":[959,2266,1133,2256,1135,2316,962,2317],"text":"1098.99","confidence":0.992}]},{"boundingBox":[566,2354,657,2361,652,2414,562,2412],"text":"Tax","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[567,2354,657,2358,654,2415,564,2411],"text":"Tax","confidence":0.997}]},{"boundingBox":[977,2374,1132,2370,1131,2428,979,2428],"text":"104.40","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[979,2372,1128,2370,1129,2427,980,2429],"text":"104.40","confidence":0.994}]},{"boundingBox":[546,2594,669,2589,670,2647,548,2652],"text":"Total","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[546,2594,665,2589,668,2647,548,2652],"text":"Total","confidence":0.499}]},{"boundingBox":[909,2593,1128,2611,1121,2673,907,2650],"text":"$ 1203.39","appearance":{"style":{"name":"other","confidence":0.878}},"words":[{"boundingBox":[912,2594,938,2596,936,2653,910,2651],"text":"$","confidence":0.996},{"boundingBox":[949,2596,1125,2613,1119,2674,946,2654],"text":"1203.39","confidence":0.995}]}],"selectionMarks":[{"boundingBox":[987,304,1048,304,1048,373,987,373],"confidence":0.394,"state":"unselected"}]}],"pageResults":[{"page":1,"tables":[]}]}}, [
  'Content-Length',
  '6754',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '26',
  'apim-request-id',
  '433e837d-2490-4944-889e-4298ae5d1a11',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 25 May 2021 18:09:59 GMT'
]);