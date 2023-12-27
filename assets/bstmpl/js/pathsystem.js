// Start: Inject code 
var wholeSystem;
var reference = {"1":[103,99,98,73,794,792,701,693,681,679,672,544,521,520,516,505,498,494,493,482,476,474,472,471,470,469,468,456,411,389,191,190,164],"2":[1449,1448,1447,1412,1374,1373,1370,1367,1366,1365,1322,1295,1226,1110,386],"3":[1412],"4":[1412],"5":[1413,1412,779,748,747,734,721,713],"8":[1062,1016,985,648,605,604,593,584,389,302,301],"9":[1393,1391,1390,1389,1261],"13":[1449,1448,1442,1436,1435,1434,1379,1376,1375,1373,1362,1361,1322,1260,1253,1156,1146,1145,1136,1135,1125,1110,1093],"17":[1447,1370,1140],"19":[576,575,544],"21":[524],"22":[1391,1390,1389,1248],"23":[1391,1390,1389],"24":[1447,1433,1374,1373,1370],"25":[387,386],"27":[1284,987,986,609,604],"28":[985,984,637,629,628,597,594,584,579,334,333,309,305,291],"30":[985,984,603,601,594,584,579,309,308,307,306,305,304,303],"31":[985,984,629,596,594,584,579],"33":[1083,1077,1056,1006,1005,985,984,629,596,594,584,579,430,142],"35":[1083,1077,1056,992,985,984,595,594,584,579,446],"37":[992,985,984,595,594,584,579,446],"39":[73,72,907,851,602,584,412,386],"41":[482],"42":[99,491,486,485,482,456,191,190],"43":[520,517,516,492,491,490,489,482,464,189,174],"45":[491,484,483],"47":[488,482],"48":[520,517,516,466,456],"49":[73,72,907,617,602,411,387,386],"51":[1428,1367,1352,1344,1342,1242],"52":[456],"53":[693,569,541,540,539,537,531,518,498,258,256,252,251,234,232,216],"55":[127,101,1449,1448,1338,1332,1331,1329,1328,1110,710,708,705,672,165],"56":[1449,1448,1426,1423,1332,1331,1329,1328,1168,1164,1110,710,709,688,682,672],"57":[126,1449,1448,1439,1434,1403,1390,1388,1386,1384,1380,1379,1374,1338,1332,1331,1329,1328,1296,1295,1279,1261,1256,1253,1252,1248,1213,1203,1190,1189,1182,1181,1174,1168,1166,1165,1164,1147,1146,1117,1116,1114,1113,1110,1093,676],"58":[1450,1448,1379,1368,1367,1362,1361,1348,1322,1226,1189,1110],"59":[1448,1332,1331,1329,1328,1282,1281,1269,1110],"60":[1450,1448,1354,1352,1351,1348,1332,1331,1329,1328,1242,1236,1219,1203,1110],"61":[1448,1332,1331,1329,1328,1191,1189,1110],"62":[1448,1431,1332,1331,1329,1328,1242,1241,1240,1239,1238,1228,1225,1200,1110],"63":[1450,1448,1355,1350,1348,1345,1332,1331,1329,1328,1219,1110],"65":[794],"66":[1409,848,789],"67":[1447,1428,1397,1390,1389,1382,1367,1212,1211,1190,1189],"68":[1437,1428,1396,1389,1382,1378,1377,1374,1182],"69":[1435,1428,1405,1404,1403,1400,1376,1374,1373,1182],"70":[521,520,518,516,471,466,215,204,203,202],"71":[570,552,551,546,545,537,523,520,518,517,516,464,234,232,231,217,216,208,207,166],"72":[653,566,565,552,551,544,530,529,524,523,520,516,494,255,250,228,226,224,219,218],"73":[653,568,567,552,551,546,545,544,531,520,516,494,471,258,257,256,252,251,250,228,224,166],"75":[103,481,473,472,164],"77":[481,475,472,456,183],"78":[481,479,472,185],"79":[504,481,478,477,472,174,173],"80":[517,464],"82":[517],"83":[518,466],"84":[693,570,569,541,540,539,537,531,498,257],"86":[808],"90":[987,986,648,637,632,615,604],"92":[987,986,632,604,293],"94":[987,986,632],"95":[987,986,604,584,580],"97":[987,986,632],"98":[1085,1083,1077,1072,1069,1064,1062,1060,1043,1016,987,986,978,977,972,633,632,610,604],"101":[987,986,605],"103":[987,986,631,605,604,590,297,294],"107":[584,580],"108":[670,665,648,636,614,613,612,604,362,360,337,336,309,308],"109":[653,376,375,373,372],"110":[653,652,651,650,637,375,374,372],"112":[649,637,636],"116":[665,657,656,655,637,635,604,359,358],"117":[657,656,655,637,635,634,604,363],"118":[636,635],"120":[649,637,636,635],"122":[1083,1077,1056],"123":[1077],"124":[1083],"125":[629,579],"126":[1367,1366,1365],"127":[1450,1448,1433,1367,1366,1212,1211,1205,1110],"128":[1351,1344,272],"129":[1450,1448,1430,1367,1366,1110],"130":[1450,1448,1367,1366,1110],"131":[1437,1436,1396,1395,1394,1389,1378,1377,1374,1373,1182,1181,1168,1166,1165,1164,1157],"132":[1451,1449],"133":[1140],"135":[1374,1373],"136":[1449,1374,1373,1157,1156],"137":[1374,1373],"138":[1439,1434,1403,1389,1374,1373,1248,1176,1174],"139":[1391,1390,1389],"140":[1403],"142":[1403],"143":[1039],"144":[1403],"145":[1449,1448,1420,1418,1417,1416,1412,1409,1408,1406,1401,1389,1332,1331,1329,1328,1322,1248,1168,1166,1165,1164,1138,1135,1110,1093,966,965,939,869,848,823,817,804,802,790,782,771,769,735,734,722,721,713,711,710,707,682,673],"148":[670,636,615,614,613,612],"149":[655,637,636],"150":[570,569,567,565,552,543,542,538,537,531,529,525,524,516],"151":[95,449,447,422,421,419],"154":[240],"157":[683],"158":[685,684,683,420,419],"160":[1248,685,684,683],"161":[685,684,683],"163":[685,684,683,452],"164":[124,123,924,910,863,861,859,858,857,848,823,808,804,802,688,687,684,683,480],"167":[1451,1448,1447,1432,1371,1362,1361,1322,1189,1156,1110,722],"168":[1440,1439,1429,1362,1336,1335,1332,1331,1329,1328,1253,1093,686],"173":[1449,1448,1332,1331,1110],"174":[1449,1448,1418,1332,1331,1110],"175":[129,128,1425,1145,711,688,687,683,682,673],"176":[1448,1332,1331,1228,1226,1225,1110],"178":[1450,1440,1379,1298,1157,1113],"179":[1450,1448,1367,1366,1365,1364,1362,1348,1347,1344,1332,1331,1228,1227,1110],"180":[1451,1450,1449,1447,1446,1445,1444,1298,1228,1227],"181":[1451,1449,1447,1445,1444,1298],"183":[1449,1448,1391,1390,1389,1387,1332,1331,1110],"188":[535,534,533],"189":[566,565,530,529,528,527,526,524,220],"190":[571,568,567,544,536,535,534,533,531,494],"191":[669,628,599,598,535,534,533,531,309,308],"193":[521],"194":[544,535,534,533,531,530,529,528,527,526,524,494,466],"196":[1436,1182,1177,1172,1170,1169,1142],"197":[1436,1288,1182,1178,1172,1170,1169,1142],"198":[1210,1209],"200":[1449,1405,1404,1403,1293,1253,1109],"201":[1405,1404,1403,1390],"202":[1449,1448,1405,1404,1403,1395,1394,1389,1110],"203":[1448,1367,1332,1331,1226,1110],"204":[1434,1182,1170,1169],"205":[434,141,139,138],"206":[602],"207":[1069,1023],"209":[115,114,6,5,1452,1412,1409,877,859,854,853,852,851,849,848,847,846,845,844,843,841,839,838,837,836,835,834,833,832,828,827,824,823,821,819,813,810,809,804,802,801,798,789,788,781,769,757,756,692,688,629,600,583,571,466,401,396,395,394,393,384],"210":[1412,1411,1409,846,839,830,827,823,821,820,818,817,816,815,814,813,811,810,809,806,805,797,794,788,785,784,783,781,768,688,496,495,493,401,395],"212":[1023,614,613,612,610,608,607,605],"213":[606,605],"214":[985,594,593,584,446,389,291,142,141,139,137],"217":[629,599,598,579],"218":[629,628,618,579,436],"219":[130,129,128,127,124,123,101,1248,924,858,857,684,683,681,679,672,452,419,389,165,132],"220":[1397,1393,1391,1390,1388,1387,1382,1379,1248,1166,382],"222":[1449,1404,1403,1253,1182],"223":[1449,1448,1434,1405,1404,1403,1176,1110],"224":[1392],"225":[1392],"226":[1392],"227":[126,1392,676],"228":[1439,1392,1391,1390,1389],"230":[1447,1370],"231":[1370],"232":[1449,1448,1420,1413,1390,1389,1332,1331,1329,1328,1322,1287,1253,1182,1176,1168,1166,1165,1164,1140,1138,1135,1110,1093,790,722,721,718,710,706,682],"233":[1451,1449,1448,1432,1397,1393,1391,1390,1389,1388,1212,1190,1189,1110],"235":[1408,1399,1381,1357,1356,1345,1336,1335,1332,1331,1329,1306,1305,1280],"236":[1357,1345,1340,1336,1335,1306,1305],"237":[1449,1448,1422,1416,1415,1408,1399,1381,1357,1336,1335,1306,1305,1280,1110],"238":[1451,1450,1449,1447,1433,1397,1370,1367,1212,1211],"239":[1447,1433,1370],"240":[1430,1242],"243":[1438,1433,1370,794],"246":[1449,1448,1432,1403,1390,1253,1242,1212,1189,1110],"247":[1451,1449,1448,1432,1397,1390,1212,1189,1110],"248":[1436,1434],"249":[790],"258":[1450,1448,1355,1350,1348,1345,1332,1331,1329,1328,1321,1219,1110],"259":[1412,1405,1404,1403,1166],"260":[1403,721],"261":[1449,1448,1436,1396,1395,1393,1391,1390,1389,1377,1374,1295,1252,1251,1182,1166,1110],"265":[1450,1448,1367,1189,1110],"266":[1450,1367,1322],"267":[1367,1205],"268":[1367],"270":[1449,1448,1435,1373,1372,1362,1332,1331,1110,839,830,829,826,825],"271":[1451,1448,1447,1444,1369,1362,1332,1331,1110],"272":[1449,1388,1387,1253,1252],"273":[1449,1387,1386,1362,1332,1331,1279],"274":[1449,1448,1418,1414,1412,1411,1407,1402,1398,1332,1331,1294,1293,1110],"275":[1451,1450,1449,1447,1440,1370,1369,1205,1156],"276":[1451,1449,1448,1444,1397,1390,1389,1298,1110],"278":[1429,1390,1242,1212,1211,792,788,779],"279":[541,540,539,463],"280":[790],"281":[1412,817,779,771,769,748,737,735],"282":[1447,1445,1433,1412,1397,1370,1140],"285":[1412,820,819,817],"287":[940],"288":[940],"290":[1083,1077,1060,1043,1032,1019,1016,977,944,943],"291":[990],"295":[1412,990,988,945,941,937,933,932,931,924,922,921,920,914,911,900,899,898,895,894,893,892,891,890,889,888,887,885,884,881,880,873,872,871,869,864,860,856,835,823,799,768,766,765,764,762,760,408],"298":[1067,1062,1061,1060,1050,1023,1019,1016,982,976,975,973,971,967,962,955,954,953,944,943,923,879,864],"301":[493,478,468],"303":[493,468],"305":[493,468],"306":[521,520,468],"307":[537,520,468],"308":[531,520,518,517,468],"309":[939,848,721],"310":[1428,1242,1001,939,859,848,823,821,817,804,802,793,786,769,701,681,387,383],"313":[1412],"316":[820,819],"318":[987,986,966,965,943,939,609,605,604],"320":[1332,1331,1329,1192,1191],"333":[964,924,909],"335":[909],"337":[909],"338":[964],"339":[767],"340":[767],"342":[1409,806,797,781,395],"344":[453],"345":[808],"347":[823,406],"348":[924],"350":[406],"351":[823,406],"353":[980,964,406],"354":[980,898,859,823,818,804,793,703,702,701,507,408,407,406],"355":[823,702,507,407,406],"356":[406],"359":[924,808,767],"360":[821,802,402],"363":[625],"364":[1086,1078,1059,1041],"367":[976],"381":[976,964],"383":[406],"384":[506],"385":[938,909,898],"386":[898],"387":[898],"388":[898,767],"389":[1412,990,941,931,881,864],"391":[1058,1041],"396":[980,976,964,406],"398":[804,454,450],"399":[1304,1205,1188,1168,1140],"400":[1304,1247],"401":[1304],"407":[1304,1181,1168],"409":[1304,1247,1205,1176],"410":[982,859,823],"411":[124,123,122,117,13,1411,1317,982,980,932,931,914,913,912,910,888,887,881,862,859,858,857,856,855,823,821,820,805,799,793,785,784,783,761,758,688,687,683,424,408,406,146],"413":[6,5,1409,849,848,846,832,824,804,781,393,384],"416":[902],"418":[964],"419":[967,964],"423":[837,836,827,821,802,400],"428":[830,827,815,395],"433":[583,401],"434":[841,837,836],"436":[838,837,836],"444":[1446,1303,1302,1301,1176,1174,696],"446":[698],"447":[698,674],"449":[583,401],"450":[821],"451":[923,921,897],"453":[1019,921,908,877],"457":[1449,1448,1277],"473":[853],"475":[1412,692,497,441],"478":[820,819,692,497,441],"479":[692,497,441],"480":[821],"481":[821],"496":[1024,974,923],"499":[508],"500":[553,550,506],"501":[553,550,506],"505":[1168],"506":[696],"507":[696],"513":[553,550,508,506,505,456],"514":[821],"515":[821,802,777],"519":[1040,1024,1000,998,991,983,982,981,978,974,924,913,882,859,839],"520":[1040,1024,1008,978,822],"521":[670,636,580],"522":[834],"523":[1104],"524":[821,699],"525":[823,822,821,817,810,804,793,764],"526":[847,839,837,836,822,821,810,802,688,407],"528":[550,506,505,466],"529":[1302,1227],"531":[923,896,766,765],"533":[582],"534":[822,582,443,410],"535":[582],"536":[669,629,628,626,579],"540":[923,896,766,765],"547":[922,921,920,916,913,897,764],"548":[923,921],"549":[921],"550":[963,937,921,908],"551":[1040],"552":[963,961,950,921,908,904,901,879],"553":[822],"554":[822,435],"558":[553,550,522,508,506,505,466],"559":[1446,1301],"560":[821,817,804,764,699],"567":[1446,1443,1303,1301,1227,1188,1155,697,696],"572":[1326],"573":[1024],"574":[1040,1024],"575":[1024,1008],"576":[1082,1024],"577":[1024],"581":[550,506,505],"585":[628,618,599,598],"592":[983],"593":[821,699],"594":[853],"595":[853],"596":[853],"599":[838],"600":[1251,1034,1028,1009,988,945,922,900,884,874,866,449,435],"601":[435],"602":[435],"603":[1023,435],"609":[544],"622":[907],"623":[907],"625":[1448,1322,1226,1188],"626":[1234,1233,1226,1200],"627":[1226,1205],"628":[1226],"629":[1226],"630":[1226],"631":[1440,1291,1226,1205],"632":[1226,1188],"633":[1226,1205],"634":[1440,1291,1226,1205],"636":[1440,1291,1289,1226],"637":[1367,1322,1226],"640":[575,544],"641":[549,544],"642":[549,544],"643":[1039],"644":[623,622,621,620,619],"645":[619],"648":[820,819],"649":[124,1425,1412,988,985,984,945,900,884,858,688,596,594,581,185],"650":[1317,694,499],"651":[694,499],"652":[950,920,907],"654":[966,961,950,907],"656":[1451,1449,1445,1300,1298,1188,723],"657":[962,961,878],"658":[820,690,499,495],"661":[1450,1367,851,849],"662":[851,850],"663":[851],"664":[950,920,894,882],"673":[1316,1315,1314,1313],"677":[1451,1449,1448,1298,1110],"681":[1277,1276],"682":[1288],"683":[1288,1181,1168],"684":[1439,1374,1297,1288,1247,1176],"685":[1295],"686":[1295],"687":[1449,1412,1295,1248],"689":[1322,1295,1288],"690":[1298],"691":[1449,1448,1434,1374,1322,1298,1253,1110],"692":[1298,1155],"693":[1449,1298,1253],"694":[1445,1298,1140],"695":[1445,1298,1205,1155],"696":[1298],"697":[1451,1445,1443,1442,1322,1303,1300,1299,1298,1288,1285,1253,1188,1176,1155,697],"699":[961],"700":[961],"701":[962],"702":[549,548,547,544],"703":[548,547,544,494],"704":[548,547],"706":[819],"707":[819],"709":[692,497,441],"711":[693,498],"712":[1293,693,498],"713":[1289,1288,695,693,498],"714":[1288,695],"715":[1288,695],"716":[1288,695],"717":[1288,695],"719":[1021,622,620,619,617,616],"721":[662,661,315],"722":[662,661],"723":[617,440,410],"724":[617,440],"725":[617],"726":[628,617,579],"730":[1317,1021,622],"731":[1317,1021],"732":[1023,1022,973],"733":[1008,1006,982],"734":[982,966,962,961,951,950,920,907,865],"735":[1008,1006,998,982],"736":[998,982],"738":[998,982],"739":[998,982,763],"740":[998,982],"741":[1057,1056,616],"742":[820,819],"743":[861,820,819],"746":[576,575,544],"748":[577,576,575,544],"749":[549,546,545,544,464],"750":[693,544,504,503,502,500,498],"751":[544,502,500],"753":[544,503,502,500],"754":[544,500],"755":[544,505,501,500],"756":[544,500,465,451],"757":[544,500],"758":[544,500,490,489],"759":[495],"762":[1277,1276],"769":[1449,1448,1322,1313,1298,1293,1292,1291,1286,1285,1254,1253,1241,1225,1205,1188,1110],"771":[394],"773":[1021,618,617,616,440],"774":[670,661,618,315],"775":[667,665,662,661,618],"776":[544,505,504,503,500,494,468,456],"777":[551,549,544,494],"779":[577,572,571,568,547,544,531,494],"780":[577,575,572,571,551,547,544,537,494],"781":[1322,1291,1286,1285,1174,776,695,689],"782":[861,803,754,692,690,497,495,451,441,440,439],"784":[776,763,749,693,498],"785":[693,504,503,502,500,498],"787":[1317,693,498],"788":[776,693,690,495],"789":[693,504,503,502,498],"790":[549,547,544],"791":[549,547,544],"793":[1313,691],"795":[819,776,496,495],"797":[853,852,850,849,847],"798":[853,852,851,849],"800":[851,849],"802":[851,849],"804":[851,850],"805":[982],"806":[982,978,973,962,961,865],"811":[950,929,926,920,916,913],"812":[895,894,763],"813":[920,895],"814":[950,926,920,907],"815":[982,950,907,898,894,865],"816":[937,907],"817":[937],"819":[937,895],"820":[937,908,907,894],"821":[666,618],"822":[666,618],"823":[667,663,618],"826":[1449,1448,1317,1110],"827":[1355,1353,1316,1315,1314,1313],"829":[1316,1315,1314,1313],"830":[1188],"832":[1289,1181],"833":[1289,1140,723],"834":[1440,1439,1436,1290,1289,1288,1285,1188,1181],"835":[1449,1448,1322,1294,1293,1292,1288,1253,1140,1110,723],"836":[1440,1291,1289,1226,1205],"837":[1295,1253],"838":[692,497,441],"841":[616],"842":[669,662,661,629,628,619,618,617,579,440],"843":[937,920,895],"845":[962],"846":[962],"847":[926],"850":[929,926,916],"851":[929,926,920],"852":[850],"853":[850],"855":[853,852,850,849,847],"856":[501],"857":[501,500],"858":[501],"859":[501,500],"860":[1288,776,723,695],"861":[692,497,441,440,439],"862":[692,497,441],"863":[861,692,497,441],"864":[1057,1021,692,617,616,497,441,440,439],"865":[973,971,961],"866":[961],"867":[961],"868":[1317,1057,1039,1023,1022,1021,1020,1016,1008,978,973,622,620,619,617],"869":[982],"872":[617,616],"873":[622,617,289,286],"875":[619,617,290],"878":[1021,631,630],"879":[1021,632,630],"880":[1039,1023,1022,1008,1006,1005],"881":[1039],"882":[1039],"884":[1039,1023,1022,1008],"885":[1057,1056,1023,1022,831],"887":[1057,1056],"888":[1057,1023,1022,1008,1006],"890":[1069,1023,973],"891":[1023],"892":[1082,1008],"893":[1077,1023],"894":[1085,1084,1082],"895":[1077,1023],"896":[1082],"897":[1077,1023],"898":[1082,1077,1072,1023,1022,1008,973,632,630,622],"900":[1077,1023],"901":[1082,1008],"902":[668,667,666],"903":[73,531],"904":[548,547,544],"905":[548,547,544],"907":[575,544],"908":[1288,1168],"909":[1288],"910":[1288,1181,1168],"912":[1298,1188],"913":[1449,1293,1253],"915":[1295],"917":[1297,1295],"919":[1297],"920":[1297],"921":[1297],"922":[1297,1205],"923":[1297],"924":[1297,1205],"925":[1297],"926":[1445,1298,1155],"927":[1298],"932":[692,497,441],"935":[549,546,544],"936":[549,546,544],"937":[549],"940":[577,544],"941":[937,895],"942":[895],"943":[666],"945":[666],"946":[663],"953":[544,494],"955":[1449,1448,1256,1254,1253,1110],"957":[1449,1448,1374,1298,1110],"958":[1449,1448,1395,1394,1389,1298,1253,1252,1110],"959":[1451,1447,1445,1444,1300,1298],"961":[618,340],"962":[623,617,329,286],"963":[1021,620,617,616],"965":[668,667,666],"968":[1403,1400,1287,706],"969":[1403,1400,1287],"972":[811]};

function createGlossary(articleIDs) {
    let container = document.createElement("div");
	let first = true;
	for (let articleID of articleIDs) {
		let article = quowadisArticles[articleID];
		let articleDiv = document.createElement("div");
		if (!first) articleDiv.classList.add("mt-3")
		
		let nav = document.createElement("div");
		nav.classList.add("qw-info-window-article-path");
		for (let section of article.sections) {
			let a = document.createElement("a");
			a.href = toLocalUrl(section[0]);
			a.textContent = section[1];
			nav.append(a, " > ");
		}
		nav.removeChild(nav.lastChild);
		
		let link = document.createElement("a");
		link.setAttribute("href", toLocalUrl(article.href));
		link.classList.add("qw-svg-info-window-lecture-link");

		{
			let i = document.createElement("i");
			i.setAttribute("aria-hidden", true);
			i.classList.add("ifc", "ifc-QW-nav_vor", "ifc-left");
			
			let span = document.createElement("span");
			span.textContent = "zum Lernatlas";

			link.append(i, span);
		}

		articleDiv.append(nav, article.heading.join(""), document.createElement("br"), link);
		container.append(articleDiv);
		first = false;
	}

    return container;
}
// End: Inject code

/**
 * Wir benutzen
 * https://github.com/ariutta/svg-pan-zoom
 */
jQuery(document).ready(function($) {
	(function() {
		var jqElemSvgContainer = $("#qw-svg-container");
		if (jqElemSvgContainer.length === 0) return;
		
		var TextLinkGroup = function(text, textElementId, pathSystem) {
			this.text = text;
			this.textElementId = textElementId;
			this.pathSystem = pathSystem;
			this.x = null;
			this.y = null;
			this.jqElemContent = null;
			this.textLinks = [];
		};
		
		TextLinkGroup.prototype.addTextLink = function(jqElemsArr) {
			this.textLinks.push(new TextLink(jqElemsArr, this));
			
			//var focusIndex = Math.ceil(this.textLinks.length / 2) - 1;
			var focusIndex = 0;
			
			this.x = this.textLinks[focusIndex].x;
			this.y = this.textLinks[focusIndex].y;
			
			for (var i in jqElemsArr) {
				jqElemsArr[i].addClass("qw-linked-text");
			}
		};
		
		TextLinkGroup.prototype.showContent = function() {
			this.pathSystem.wholeSystem.showTextLinkGroup(this, false);
		};
		
		TextLinkGroup.prototype.getText = function() {
			return this.text;
		};
		
		TextLinkGroup.prototype.getTitle = function() {
			return this.textData['articleTitle'];
		};
		
		TextLinkGroup.prototype.getContent = function() {
			if (null !== this.jqElemContent) {
				return this.jqElemContent;
			}
			var that = this;
			this.jqElemContent =  $("<div />").append($("<div />", {
				"class": "qw-loader-container"
			}).append($("<i />", {
				"class": "fa fa-cog fa-spin"
			})));
			
			this.pathSystem.wholeSystem.getTextLinkContent(this);
			
			return this.jqElemContent;
		}
		
		TextLinkGroup.prototype.applyLoadedContent = function(jqElem) {
			this.jqElemContent.empty().append(jqElem);
		};
		
		TextLinkGroup.prototype.getPathSystem = function() {
			return this.pathSystem;
		};
		
		TextLinkGroup.prototype.highlight = function() {
			for (var i in this.textLinks) {
				this.textLinks[i].highlight();
			}
		};
		
		TextLinkGroup.prototype.mark = function() {
			for (var i in this.textLinks) {
				this.textLinks[i].mark();
			}
		};
		
		TextLinkGroup.prototype.unmark = function() {
			for (var i in this.textLinks) {
				this.textLinks[i].unmark();
			}
		};
		
		var TextLink = function(jqElemsArr, textLinkGroup) {
			this.textLinkGroup = textLinkGroup;
			this.jqElemsArr = jqElemsArr;
			this.focusJqElem = null;
			
			(function(that) {
				var focusIndex = Math.ceil(jqElemsArr.length / 2) - 1;
				for (var i in jqElemsArr) {
					var jqElem = jqElemsArr[i];
					if (i == focusIndex) {
						that.focusJqElem = jqElem;
						
						that.applyX(that.focusJqElem);
						that.applyY(that.focusJqElem);
					}
					
					jqElem.click(function(e) {
						e.preventDefault();
						e.stopPropagation();
						textLinkGroup.showContent();
					}).dblclick(function(e) {
						e.preventDefault();
						e.stopPropagation();
					});
				}
			}).call(this, this);
		};
		
		TextLink.prototype.highlight = function() {
			for (var i in this.jqElemsArr) {
				this.jqElemsArr[i].addClass("active");
			}
//			this.textLinkGroup.pathSystem.wholeSystem.disableDoubleClick();
//			this.focusJqElem.css("fill", "#fff");
//			var that = this,
//				fontSizeBefore = this.focusJqElem.css("fontSize");
//			
//			this.focusJqElem.css("fontSize", "20px");
//			this.focusJqElem.stop(true).animate({
//				"fontSize": fontSizeBefore
//			}, 300, function() {
//				that.focusJqElem.removeAttr("style");
//				that.textLinkGroup.pathSystem.wholeSystem.enableDoubleClick();
//			});
//			
//			setTimeout(function() {
//				that.focusJqElem.removeAttr("style");
//			}, 400);
		};
		
		TextLink.prototype.mark = function() {
			for (var i in this.jqElemsArr) {
				this.jqElemsArr[i].addClass("active");
			}
		};
		
		TextLink.prototype.unmark = function() {
			for (var i in this.jqElemsArr) {
				this.jqElemsArr[i].removeClass("active");
			}
		};
		
		TextLink.prototype.applyX = function(jqElem) {
			if (!jqElem.attr("transform")) return;
			var elems = jqElem.attr("transform").split(/\(|\)|\s/);
			this.x = elems[5];
		}
		
		TextLink.prototype.applyY = function(jqElem) {
			if (!jqElem.attr("transform")) return;
			var elems = jqElem.attr("transform").split(/\(|\)|\s/);
			this.y = elems[6];
		};
		
		var PathSystem = function(wholeSystem, jqElem, jqElemActivator) {
			this.jqElem = jqElem;
			this.wholeSystem = wholeSystem;
			this.jqElemActivator = jqElemActivator;
			
			(function(that) {
				jqElemActivator.click(function(e) {
					e.preventDefault();
					if (that.isActive()) {
						that.deactivate();
					} else {
						that.activate();
					}
				});
				
			}).call(this, this);
		};
		
		PathSystem.prototype.isActive = function() {
			return this.jqElemActivator.hasClass("active");
		};
		
		PathSystem.prototype.activate = function() {
			this.jqElemActivator.addClass("active");
			this.wholeSystem.jqElemPathSystemContainer.append(this.jqElem);
		};
		
		PathSystem.prototype.deactivate = function() {
			this.jqElemActivator.removeClass("active");
			this.jqElem.detach();
		};
		
		PathSystem.prototype.equals = function(o) {
			return o instanceof PathSystem && o.jqElem.is(this.jqElem); 
		};
		
		var InfoWindow = function(jqElemContainer) {
			this.jqElemContainer = jqElemContainer;
			this.jqElemToggler = jqElemContainer.find(".qw-svg-info-window-toggler");
			this.jqElemInfoWindow = jqElemContainer.find(".qw-svg-info-window");
			this.jqElemInfoWindowTitle = jqElemContainer.find(".qw-svg-info-window-title");
			this.jqElemInfoWindowContent = jqElemContainer.find(".qw-svg-info-window-content");
			this.currentGroup = null;
			
			(function(that) {
				this.jqElemToggler.click(function() {
					that.jqElemInfoWindow.toggleClass("qw-info-window-offcanvas--open");
				});
//				this.jqElemContainer.on('mouseenter', function() {
//					if (null === that.currentGroup) return;
//					that.currentGroup.mark();
//				}).on('mouseleave', function() {
//					if (null === that.currentGroup) return;
//					that.currentGroup.unmark();
//				})
			}).call(this, this);
		};
		
		InfoWindow.prototype.showTextLinkGroup = function(textLinkGroup) {
			if (this.jqElemContainer.hasClass("d-none")) {
				this.jqElemContainer.removeClass("d-none");
			}
			
			this.jqElemInfoWindowTitle.empty().append(textLinkGroup.getText());
			this.jqElemInfoWindowContent.empty().append(textLinkGroup.getContent()); // TODO
			this.jqElemInfoWindow.addClass("qw-info-window-offcanvas--open");
			this.currentGroup = textLinkGroup;
		};
		
		var WholeSystem = function(jqElemSvgContainer, jqElemSpinner) {
			this.initContainer();
			
			this.infoWindow = new InfoWindow($(".qw-svg-info-container:first"));
			
			this.jqElemPathSystemContainer = jqElemSvgContainer.find("#L-Bahnen").show();
			
			this.pathSystems = [];
			this.addPathSystem($("#Arterien"), $(".qw-path-system-arteries:first"));
			this.addPathSystem($("#Venen"), $(".qw-path-system-venes:first"));
			this.addPathSystem($("#Nerven"), $(".qw-path-system-nerves:first"));
			this.addPathSystem($("#Lymphe"), $(".qw-path-system-lymphs:first"));
			
			this.activeSystem = null;
			this.currentTextLinkGroup = null;
		
			this.textLinkData = jqElemSvgContainer.data("text-link-data") || {};
			this.textLinkUrl = jqElemSvgContainer.data("text-link-url") || null;
			this.textLinks = {};
			
			this.initTextLinks();
			
			this.minZoom = 0.5; 
			this.maxZoom = 30;
			var that = this;
			this.panzoom = null;
			this.initPanZoom();
			
			var zoomEnabled = false;
			$(window).on('keydown.pathsystem', function(e) {
				if (!event.shiftKey && !event.ctrlKey) return;
				
				zoomEnabled = true;
				panzoom.enableMouseWheelZoom();
			});
			
			$(window).on('keyup.pathsystem', function(e) {
				zoomEnabled = false;
				panzoom.disableMouseWheelZoom();
			});
			
			$(document).on('wheel.pathsystem', function(e) {
				//Avoid default wheel zoom behaviour
				if (zoomEnabled) return false;
			});
			
			
			this.jqElemZoomIn = $(".qw-svg-zoom-in").click(function() {
				//evtl mit zoomAtPoint - siehe panzoom.js
				panzoom.zoomIn();
			});
			
			this.jqElemZoomOut = $(".qw-svg-zoom-out").click(function(e) {
				panzoom.zoomOut();
			});
			
			//this.panToPoint(1200, 600, 1);
			
			this.initActiveSystem(jqElemSvgContainer.data("text") || null,
					jqElemSvgContainer.data("zoom-factor") || 12 );
			
			jqElemSvgContainer;
			jqElemSpinner.remove();
			
			$(window).on('toggleNav.open', function(e, toggleNav) {
				that.redraw();
			});
			
			$(window).on('toggleNav.close', function(e, toggleNav) {
				that.redraw();
			});
		};
		
		WholeSystem.prototype.initContainer = function() {
			this.jqElemSvgContainer = jqElemSvgContainer
			.removeClass("d-none")
			.css({
				width: "100%",
				height: "calc(100vh - 200px)",
				overflow: "hidden",
				position: "relative",
	//			"overflow": "hidden",
	//			"position": "relative"
			})
			.width(jqElemSvgContainer.width()).height(jqElemSvgContainer.height());
			
			this.jqElemSvg = jqElemSvgContainer.find("svg:first")
				.css({
					 width: "100%",
					    height: "100%",
	//			    position: "absolute",
	//			    top: 0,
	//			    left: 0
				})
			;
		};
		
		WholeSystem.prototype.resetContainer = function() {
			this.jqElemSvgContainer.removeAttr("style");
			this.jqElemSvg.removeAttr("style");
		};
		
		WholeSystem.prototype.initPanZoom = function() {
			var zoom = null,
				pan = null
				that = this;
			if (null !== this.panzoom) {
				zoom = this.panzoom.getZoom();
				pan = this.panzoom.getPan();
				this.panzoom.destroy();
			}
			/**
			 * https://github.com/ariutta/svg-pan-zoom
			 */
			this.panzoom = svgPanZoom(this.jqElemSvg.get(0), {
					 panEnabled: true
					 , controlIconsEnabled: false
					 , zoomEnabled: true
					 , dblClickZoomEnabled: true
					 , mouseWheelZoomEnabled: false
					 , preventMouseEventsDefault: true
					 , zoomScaleSensitivity: 0.2
					 , minZoom: this.minZoom
					 , maxZoom: this.maxZoom
					 , fit: true
					 , contain: false
					 , center: true
					 , refreshRate: 'auto'
					 , beforeZoom: function(){}
					 , onZoom: function(){
						 that.checkZoomButtons()
					 }, beforePan: function(){}
					 , onPan: function(){}
					 , onUpdatedCTM: function(){}
					 , eventsListenerElement: null
			});
			
			window.panzoom = this.panzoom;
			if (null !== zoom) {
				this.panzoom.zoom(zoom);
			}
			
			if (null !== pan) {
				this.panzoom.pan(pan);
			}
		};
		
		WholeSystem.prototype.redraw = function() {
			this.resetContainer();
			this.initContainer();
			this.initPanZoom();
			
			if (null !== this.currentTextLinkGroup) {
				this.showTextLinkGroup(this.currentTextLinkGroup);
			}
		};
		
		WholeSystem.prototype.checkZoomButtons = function() {
			this.jqElemZoomIn.toggleClass("disabled", this.panzoom.getZoom() >= this.maxZoom);
			this.jqElemZoomOut.toggleClass("disabled", this.panzoom.getZoom() <= this.minZoom);
		}
		
		WholeSystem.prototype.disableDoubleClick = function() {
			this.panzoom.disableDblClickZoom();
		};
		
		WholeSystem.prototype.enableDoubleClick = function() {
			this.panzoom.enableDblClickZoom();
		};
		
		WholeSystem.prototype.getTextLinkContent = function(textLinkGroup) {
			console.log(textLinkGroup);
			let articleIds = reference[textLinkGroup.textElementId];
			let articleList = createGlossary(articleIds);
			console.log(articleIds);
			console.log(articleList);

			textLinkGroup.applyLoadedContent($(articleList));
			// Deleted code
			/*
			var that = this,
				loadedContent = $("<div />", {
				"text": "Die Daten konnten nicht geladen werden."
			}).append($("<button />", {
				"class": "btn btn-primary ml-1"
			}).click(function(e) {
				e.preventDefault();
				that.getTextLinkContent(textLinkGroup);
			}));
			
			if (null === this.textLinkUrl) {
				textLinkGroup.applyLoadedContent(loadedContent);
			}
			
			$.get(this.textLinkUrl, {'textElementId': textLinkGroup.textElementId}, function(htmlStr) {
				textLinkGroup.applyLoadedContent($($.parseHTML(htmlStr)));
			}).fail(function() {
				textLinkGroup.applyLoadedContent(loadedContent);
			});
			*/
		};
		
		WholeSystem.prototype.panToPoint = function(x, y, zoom) {
			this.panzoom.zoom(zoom);
			var realZoom = this.panzoom.getSizes().realZoom;
			
			var sectionHeight = $(window).height() - this.jqElemSvg.offset().top;
			var sectionWidth = this.jqElemSvg.width();
			
			this.panzoom.pan({  
				x: -(x * realZoom - sectionWidth / 2),
				y: -(y * realZoom - sectionHeight / 2) 
			});
		};
		
		WholeSystem.prototype.showTextLinkGroup = function(textLinkGroup, pan, zoomFactor) {
			this.infoWindow.showTextLinkGroup(textLinkGroup);
			
			if (this.currentTextLinkGroup !== null) {
				this.currentTextLinkGroup.unmark();
			}
			
			window.textLinkGroup = textLinkGroup;
			if (pan) {
				this.panToPoint(textLinkGroup.x, textLinkGroup.y, zoomFactor);
				setTimeout(function() {
					textLinkGroup.mark();
				}, 1000);
			} else {
				textLinkGroup.mark();
			}
			
			this.currentTextLinkGroup = textLinkGroup;
//			this.panzoom.pan(
//				textLink.x,
//				textLink.y
//			);
			
//			this.panzoom.moveTo(textLink.focusJqElem.offset().left, 
//					textLink.focusJqElem.offset().top)
		};
		
		WholeSystem.prototype.addPathSystem = function(jqElem, jqElemActivator) {
			this.pathSystems.push(new PathSystem(this, jqElem, jqElemActivator));
		};
		
		WholeSystem.prototype.initActiveSystem = function(text, zoomFactor) {
			if (text && this.textLinks.hasOwnProperty(text)) {
				var activeTextLinkGroup = this.textLinks[text],
					that = this;
				this.activeSystem = activeTextLinkGroup.getPathSystem();
				that.showTextLinkGroup(activeTextLinkGroup, true, zoomFactor);
			} else {
				this.activeSystem = this.pathSystems[0];
			}
			
			for (var i in this.pathSystems) {
				var pathSystem = this.pathSystems[i];
				if (pathSystem.equals(this.activeSystem)) {
					pathSystem.activate();
					continue;
				}
				pathSystem.deactivate();
			}
		};
		
		WholeSystem.prototype.initTextLinks = function() {
			for (var i in this.pathSystems) {
				this.initTextLinksForSytem(this.pathSystems[i]);
			}
		}
		
		WholeSystem.prototype.initTextLinksForSytem = function(pathSystem) {
			var currentText = '',
				lastSingle = false,
				arrJqElemsText = [],
				that = this;
			
			pathSystem.jqElem.find("text").each(function() {
				var jqElemText = $(this)
				//var text = $(this).text().trim();
				//if (text === 'Atriumdextrum') {
					var text = '';
					$(this).contents().each(function() {
						if (this.nodeType === 1) {
							text += ' ' + $(this).text();
						} else if (this.nodeType === 3) {
							text += this.wholeText;
						}
					});
					text = text.trim();
				//}
				
				//Add singletexts together to 1 Textlinks
				if (text.length === 0) return;
				if (text.length === 1) {
					lastSingle = true;
					currentText += text;
					arrJqElemsText.push($(this));
					return;
				}
				
				if (lastSingle) {
					lastSingle = false;
					that.addAndCheckTextLink(pathSystem, currentText, arrJqElemsText);
					currentText = '';
					arrJqElemsText = [];
				}
				that.addAndCheckTextLink(pathSystem, text, [$(this)])
				return;
				
			});
			
			if (lastSingle) {
				that.addAndCheckTextLink(pathSystem, currentText, arrJqElemsText);
			}
		};
		
		WholeSystem.prototype.addAndCheckTextLink = function(pathSystem, text, arrJqElems) {
			if (!this.textLinkData.hasOwnProperty(text)) return;
			
			if (!this.textLinks.hasOwnProperty(text)) {
				this.textLinks[text] = new TextLinkGroup(text, this.textLinkData[text], pathSystem);
			}
			
			this.textLinks[text].addTextLink(arrJqElems);
		};
		
		// Start: Change code
		wholeSystem = new WholeSystem(jqElemSvgContainer, $(".spinner-holder"));

		let textLinkIndex = window.location.search.match(/\?te=(\d*)/)?.[1];
		let textLinkName = Object.entries(wholeSystem.textLinkData).find(a => a[1] == textLinkIndex)?.[0];
		let textLink = wholeSystem.textLinks?.[textLinkName];
		console.log(textLinkIndex, textLinkName, textLink);

		if (textLink) {
			wholeSystem.pathSystems.forEach(pathSystem => {
				if (pathSystem.equals(textLink.pathSystem)) pathSystem.activate();
				else pathSystem.deactivate();
			});
			wholeSystem.showTextLinkGroup(textLink, true, 15);
		} else {
			wholeSystem.pathSystems.reverse().forEach(pathSystem => pathSystem.activate());
			wholeSystem.panToPoint(1200, 2300, 1);
			wholeSystem.currentTextLinkGroup = null;
			wholeSystem.infoWindow.jqElemContainer.addClass("d-none");
		}
		// End: Change code
		
//		return;
//		var usePan = true;
//		
//		if (usePan) {
//			
//			panzoom(jqElemSvgContainer.find("#everything").get(0), {
//				smoothScroll: false
//			});
//		} else {
//			jqElemSvgContainer.css({
//				"position": "relative",
//				"overflow": "hidden",
//			}).width(jqElemSvgContainer.width()).height(jqElemSvgContainer.height());
//			
//			jqElemSvg = jqElemSvgContainer.find("svg:first").css({
//	//			"position": "absolute",
//	//			"top": 0,
//	//			"left": 0
//				"transition": "200ms ease-in transform",
//				"position": "relative",
//				"top": "50%",
//				"left":	"50%",
//				"transform": "translateY(-50%) translateX(-50%)"
//			}).addClass("svg");
//			
//	//		panzoom(jqElemSvg.find("#zoomable").get(0));
//			
//			var lastZoomFactor = 0,
//				originalWidth = jqElemSvgContainer.width(),
//				originalHeight = jqElemSvgContainer.height(),
//				aspectRatio = originalWidth / originalHeight,
//				pixelChange = 50
//				;
//			$("<a />", {
//				"text": "zoom IN",
//				"href": "#"
//			}).click(function(e) {
//				e.preventDefault();
//				lastZoomFactor++;
//				var relativeLastWidth = lastZoomFactor * pixelChange * aspectRatio * lastZoomFactor;
//				var relativeLastHeight = lastZoomFactor * pixelChange / aspectRatio * lastZoomFactor;
//				
//	//			jqElemSvg.width(originalWidth + relativeLastWidth);
//	//			jqElemSvg.height(originalHeight + relativeLastHeight);
//				
//				console.log("translate3d(-" + relativeLastWidth / 2 
//							+ "px, -" + relativeLastHeight / 2 + "px, 0) scale(" + 1 + (lastZoomFactor * 0.1) + ")");
//				
//				jqElemSvg.css({
//					"transform": "translateY(-50%) translateX(-50%) scale(" + (1 + (lastZoomFactor * 0.1)) + ")",
//				});
//	//			jqElemSvg.css({
//	//				"left": "-" + relativeLastWidth / 2 + "px",
//	//				"top": "-" + relativeLastHeight / 2 + "px"
//	//			});
//				
//			}).insertBefore(jqElemSvgContainer);
//			
//			$("<a />", {
//				"text": "zoom Out",
//				"href": "#"
//			}).click(function(e) {
//				e.preventDefault();
//				lastZoomFactor--;
//				var relativeLastWidth = lastZoomFactor * pixelChange * aspectRatio * lastZoomFactor;
//				var relativeLastHeight = lastZoomFactor * pixelChange / aspectRatio * lastZoomFactor;
//				
//				jqElemSvg.width(originalWidth + relativeLastWidth);
//				jqElemSvg.height(originalHeight + relativeLastHeight);
//				
//				jqElemSvg.css({
//					"transform": "translate3d(-" + relativeLastWidth / 2 
//							+ "px, -" + relativeLastHeight / 2 + "px, 0)",
//				});
//	//			jqElemSvg.css({
//	//				"left": "-" + relativeLastWidth / 2 + "px",
//	//				"top": "-" + relativeLastHeight / 2 + "px"
//	//			});
//			}).insertBefore(jqElemSvgContainer);
//		}
	})();
});