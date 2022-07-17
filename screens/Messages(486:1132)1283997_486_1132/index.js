import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_486_1629}>
        <TouchableOpacity
          style={styles.TouchableOpacity_486_1436}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("486_1646"))
          }
        >
          <View style={styles.View_486_1437} />
          <View style={styles.View_486_1308}>
            <View style={styles.View_486_1309}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdafd333-e296-4496-ac53-a9a31f1ab6a3"
                }}
                style={styles.ImageBackground_486_1310}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8585eb1f-2821-4016-bacd-56bab741b76c"
                }}
                style={styles.ImageBackground_486_1311}
              />
              <View style={styles.View_486_1312}>
                <Text style={styles.Text_486_1312}>Michael</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_486_1219}>
            <Text style={styles.Text_486_1219}>i guess i am your vibe.lol</Text>
          </View>
          <View style={styles.View_486_1233}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c82d54b4-7be1-4b19-a54b-447509706493"
              }}
              style={styles.ImageBackground_486_1234}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_486_1483}>
          <View style={styles.View_486_1484} />
          <View style={styles.View_486_1176}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af7ef46a-3d61-4eb7-bf5b-27f096eb2357"
              }}
              style={styles.ImageBackground_486_1177}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e18faffc-71d0-4781-9949-43fccd60177b"
              }}
              style={styles.ImageBackground_486_1178}
            />
            <View style={styles.View_486_1179}>
              <Text style={styles.Text_486_1179}>Henry</Text>
            </View>
          </View>
          <View style={styles.View_486_1223}>
            <Text style={styles.Text_486_1223}>
              so are we up for next week?
            </Text>
          </View>
          <View style={styles.View_486_1249}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb2f5b88-6234-455d-a182-571f885809a9"
              }}
              style={styles.ImageBackground_486_1250}
            />
          </View>
        </View>
        <View style={styles.View_486_1507}>
          <View style={styles.View_486_1508} />
          <View style={styles.View_486_1184}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4167166-3c86-4d17-b3ff-c136ea4f44d7"
              }}
              style={styles.ImageBackground_486_1185}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56e90290-0168-40f4-9b14-db5f009d6003"
              }}
              style={styles.ImageBackground_486_1186}
            />
            <View style={styles.View_486_1187}>
              <Text style={styles.Text_486_1187}>Simon</Text>
            </View>
          </View>
          <View style={styles.View_486_1227}>
            <Text style={styles.Text_486_1227}>
              No, he said he is a dance instructor
            </Text>
          </View>
          <View style={styles.View_486_1265}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f53bd2c-4e1f-4344-8164-e170245ef3ca"
              }}
              style={styles.ImageBackground_486_1266}
            />
          </View>
        </View>
        <View style={styles.View_486_1531}>
          <View style={styles.View_486_1532} />
          <View style={styles.View_486_1533}>
            <View style={styles.View_486_1534}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d71970f3-fa89-4144-a618-8468e0a073a0"
                }}
                style={styles.ImageBackground_486_1535}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efd07d83-59dc-4cc0-b4e8-caddcf843376"
                }}
                style={styles.ImageBackground_486_1536}
              />
              <View style={styles.View_486_1537}>
                <Text style={styles.Text_486_1537}>Michael</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_486_1538}>
            <Text style={styles.Text_486_1538}>i guess i am your vibe.lol</Text>
          </View>
          <View style={styles.View_486_1539}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9581ba9c-6195-4230-801a-2eb896e97b7b"
              }}
              style={styles.ImageBackground_486_1540}
            />
          </View>
        </View>
        <View style={styles.View_486_1555}>
          <View style={styles.View_486_1556} />
          <View style={styles.View_486_1557}>
            <View style={styles.View_486_1558}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92942b00-6c15-4124-86a7-180d311419d8"
                }}
                style={styles.ImageBackground_486_1559}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ec31df0-3d75-45c3-890c-6ac2376f2844"
                }}
                style={styles.ImageBackground_486_1560}
              />
              <View style={styles.View_486_1561}>
                <Text style={styles.Text_486_1561}>Michael</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_486_1562}>
            <Text style={styles.Text_486_1562}>i guess i am your vibe.lol</Text>
          </View>
          <View style={styles.View_486_1563}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd90976f-80b3-4de6-bc9e-eb3e8722a8ab"
              }}
              style={styles.ImageBackground_486_1564}
            />
          </View>
        </View>
        <View style={styles.View_486_1579}>
          <View style={styles.View_486_1580} />
          <View style={styles.View_486_1581}>
            <View style={styles.View_486_1582}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30d7d080-945e-4fc4-8b84-8aceac19bda3"
                }}
                style={styles.ImageBackground_486_1583}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b23178f-099c-49f4-9b39-1506c1ab403f"
                }}
                style={styles.ImageBackground_486_1584}
              />
              <View style={styles.View_486_1585}>
                <Text style={styles.Text_486_1585}>Michael</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_486_1586}>
            <Text style={styles.Text_486_1586}>i guess i am your vibe.lol</Text>
          </View>
          <View style={styles.View_486_1587}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a4d1f3b-17e2-4cc2-bdab-cca6e81ad23d"
              }}
              style={styles.ImageBackground_486_1588}
            />
          </View>
        </View>
        <View style={styles.View_486_1603}>
          <View style={styles.View_486_1604} />
          <View style={styles.View_486_1605}>
            <View style={styles.View_486_1606}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/687bbb24-6e9f-4a7a-af09-0b5124879d9d"
                }}
                style={styles.ImageBackground_486_1607}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c286079-1726-4b36-b6cc-e4ce00bb9851"
                }}
                style={styles.ImageBackground_486_1608}
              />
              <View style={styles.View_486_1609}>
                <Text style={styles.Text_486_1609}>Michael</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_486_1610}>
            <Text style={styles.Text_486_1610}>i guess i am your vibe.lol</Text>
          </View>
          <View style={styles.View_486_1611}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cbb5e96-10d0-45e3-a93b-92bde5e788b7"
              }}
              style={styles.ImageBackground_486_1612}
            />
          </View>
        </View>
        <View style={styles.View_486_1459}>
          <View style={styles.View_486_1460} />
          <View style={styles.View_486_1172}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82ac5d53-3e03-4489-8c89-71cb27177d9f"
              }}
              style={styles.ImageBackground_486_1173}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eba89803-3059-40f5-9246-9b605fac93d2"
              }}
              style={styles.ImageBackground_486_1174}
            />
            <View style={styles.View_486_1175}>
              <Text style={styles.Text_486_1175}>Mia</Text>
            </View>
          </View>
          <View style={styles.View_486_1221}>
            <Text style={styles.Text_486_1221}>
              did you go to the university today?
            </Text>
          </View>
          <View style={styles.View_486_1241}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/037ff14d-3143-420f-86a2-09877c06f4b6"
              }}
              style={styles.ImageBackground_486_1242}
            />
          </View>
        </View>
        <View style={styles.View_486_1495}>
          <View style={styles.View_486_1496} />
          <View style={styles.View_486_1180}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35eaa1cd-7946-427b-8fc4-67f377a25248"
              }}
              style={styles.ImageBackground_486_1181}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1538f4b-5fdf-4fe7-8ebf-94f023620160"
              }}
              style={styles.ImageBackground_486_1182}
            />
            <View style={styles.View_486_1183}>
              <Text style={styles.Text_486_1183}>Mike</Text>
            </View>
          </View>
          <View style={styles.View_486_1225}>
            <Text style={styles.Text_486_1225}>where do you live?</Text>
          </View>
          <View style={styles.View_486_1257}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02252bcd-31d0-40f0-bfbe-88497c3393fa"
              }}
              style={styles.ImageBackground_486_1258}
            />
          </View>
        </View>
        <View style={styles.View_486_1519}>
          <View style={styles.View_486_1520} />
          <View style={styles.View_486_1628}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dfe85e7-0b33-4066-bf3b-36cd35ee2c4c"
              }}
              style={styles.ImageBackground_486_1190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39dbef01-602b-48c4-bc0f-89521b57238d"
              }}
              style={styles.ImageBackground_486_1192}
            />
            <View style={styles.View_486_1193}>
              <Text style={styles.Text_486_1193}>Edward</Text>
            </View>
          </View>
          <View style={styles.View_486_1229}>
            <Text style={styles.Text_486_1229}>+491111111111</Text>
          </View>
          <View style={styles.View_486_1273}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26fc2441-90e0-4e54-be49-06f4968d6e0d"
              }}
              style={styles.ImageBackground_486_1274}
            />
          </View>
        </View>
        <View style={styles.View_486_1543}>
          <View style={styles.View_486_1544} />
          <View style={styles.View_486_1545}>
            <View style={styles.View_486_1546}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0eb2bd0-f710-46c3-bf0e-087cbe361f8f"
                }}
                style={styles.ImageBackground_486_1547}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe415c41-c2aa-434a-ac9c-ed253f9ea873"
                }}
                style={styles.ImageBackground_486_1548}
              />
              <View style={styles.View_486_1549}>
                <Text style={styles.Text_486_1549}>Michael</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_486_1550}>
            <Text style={styles.Text_486_1550}>i guess i am your vibe.lol</Text>
          </View>
          <View style={styles.View_486_1551}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/407622a1-61d1-4b29-acdb-46f22710325c"
              }}
              style={styles.ImageBackground_486_1552}
            />
          </View>
        </View>
        <View style={styles.View_486_1567}>
          <View style={styles.View_486_1568} />
          <View style={styles.View_486_1569}>
            <View style={styles.View_486_1570}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9437f9d4-d111-44d2-b3c7-5eb24843e516"
                }}
                style={styles.ImageBackground_486_1571}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8785f9c-0c60-4f88-b513-e85790672fbf"
                }}
                style={styles.ImageBackground_486_1572}
              />
              <View style={styles.View_486_1573}>
                <Text style={styles.Text_486_1573}>Michael</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_486_1574}>
            <Text style={styles.Text_486_1574}>i guess i am your vibe.lol</Text>
          </View>
          <View style={styles.View_486_1575}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1890d165-bff7-42fc-87d4-59acd729129c"
              }}
              style={styles.ImageBackground_486_1576}
            />
          </View>
        </View>
        <View style={styles.View_486_1591}>
          <View style={styles.View_486_1592} />
          <View style={styles.View_486_1593}>
            <View style={styles.View_486_1594}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fba906ed-0e54-43b7-bc54-a83bb414790f"
                }}
                style={styles.ImageBackground_486_1595}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89cc793c-2190-4484-a13c-e042bf0a1432"
                }}
                style={styles.ImageBackground_486_1596}
              />
              <View style={styles.View_486_1597}>
                <Text style={styles.Text_486_1597}>Michael</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_486_1598}>
            <Text style={styles.Text_486_1598}>i guess i am your vibe.lol</Text>
          </View>
          <View style={styles.View_486_1599}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbdc6fcd-bbd3-4525-878e-e1e8cbca2d55"
              }}
              style={styles.ImageBackground_486_1600}
            />
          </View>
        </View>
        <View style={styles.View_486_1615}>
          <View style={styles.View_486_1616} />
          <View style={styles.View_486_1617}>
            <View style={styles.View_486_1618}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bb6de66-3c77-4e17-b63e-491c4c518cd9"
                }}
                style={styles.ImageBackground_486_1619}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9888a71c-d7df-49c7-ab3d-2e70bb63a05e"
                }}
                style={styles.ImageBackground_486_1620}
              />
              <View style={styles.View_486_1621}>
                <Text style={styles.Text_486_1621}>Michael</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_486_1622}>
            <Text style={styles.Text_486_1622}>i guess i am your vibe.lol</Text>
          </View>
          <View style={styles.View_486_1623}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01f3d15a-b0fc-40c6-b9e3-c945d9646002"
              }}
              style={styles.ImageBackground_486_1624}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_486_1376}>
        <View style={styles.View_492_126} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d896090-e25a-4eb6-ae16-4e9043b29210"
          }}
          style={styles.ImageBackground_486_1378}
        />
        <View style={styles.View_486_1379}>
          <View style={styles.View_486_1380}>
            <TouchableOpacity
              style={styles.TouchableOpacity_486_1381}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("2_77"))
              }
            >
              <View style={styles.View_486_1382}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b15c71d-d325-49ad-99fe-88248a1a6096"
                  }}
                  style={styles.ImageBackground_486_1383}
                />
              </View>
            </TouchableOpacity>
            <View source={{ uri: "null" }} style={styles.View_486_1386} />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_486_1387}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_264"))
            }
          >
            <View style={styles.View_486_1388}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34253feb-3a60-4c4e-9b62-34eeb33a7ccf"
                }}
                style={styles.ImageBackground_486_1389}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.View_486_1392}>
            <View style={styles.View_486_1393}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/343cf9fd-92d2-4768-94bf-9494353bd5fd"
                }}
                style={styles.ImageBackground_486_1394}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_486_1399}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_379"))
            }
          >
            <View style={styles.View_486_1400}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62462b41-377b-40d3-9593-6d131269bb26"
                }}
                style={styles.ImageBackground_486_1401}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_486_1404}>
        <View style={styles.View_486_1630} />
        <TouchableOpacity
          style={styles.TouchableOpacity_486_1405}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_77"))
          }
        >
          <View style={styles.View_486_1406}>
            <View style={styles.View_486_1407} />
            <View style={styles.View_486_1408}>
              <View style={styles.View_486_1409}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e69d7f0-7cef-4073-84ad-0eb481fe0f8b"
                  }}
                  style={styles.ImageBackground_486_1410}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_486_1435}>
          <Text style={styles.Text_486_1435}>Messages</Text>
        </View>
        <View style={styles.View_486_1412}>
          <View style={styles.View_486_1413}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96790d15-d933-4f87-a1b1-5fbe0a8e2dbb"
              }}
              style={styles.ImageBackground_486_1414}
            />
          </View>
          <View style={styles.View_486_1417}>
            <View style={styles.View_486_1418}>
              <View style={styles.View_486_1419} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36c61666-b30f-484d-8010-aa08e2b51e22"
                }}
                style={styles.ImageBackground_486_1420}
              />
              <View style={styles.View_486_1421} />
            </View>
            <View style={styles.View_486_1422}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bb95acf-cff7-436a-9551-4f4d37b6846b"
                }}
                style={styles.ImageBackground_486_1423}
              />
            </View>
            <View style={styles.View_486_1427}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/658ae2f8-3b76-4c05-8111-4f69c898bb24"
                }}
                style={styles.ImageBackground_486_1428}
              />
            </View>
          </View>
          <View style={styles.View_486_1433}>
            <View style={styles.View_486_1434}>
              <Text style={styles.Text_486_1434}>9:27</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 248, 251, 1)" },
  View_2: { height: hp("111%") },
  View_486_1629: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_486_1436: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1437: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1308: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_486_1309: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1310: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1311: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1312: {
    width: wp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1312: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1219: {
    width: wp("41%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1219: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1233: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1234: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1483: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1484: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1176: {
    width: wp("30%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_486_1177: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1178: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1179: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1179: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1223: {
    width: wp("46%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_486_1223: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1249: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1250: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1507: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1508: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1184: {
    width: wp("31%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_486_1185: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1186: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1187: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1187: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1227: {
    width: wp("58%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_486_1227: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1265: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1266: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1531: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1532: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1533: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_486_1534: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1535: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1536: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1537: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1537: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1538: {
    width: wp("41%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1538: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1539: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1540: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1555: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1556: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1557: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_486_1558: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1559: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1560: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1561: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1561: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1562: {
    width: wp("41%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1562: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1563: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1564: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1579: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1580: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1581: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_486_1582: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1583: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1584: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1585: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1585: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1586: {
    width: wp("41%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1586: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1587: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1588: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1603: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1604: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1605: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_486_1606: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1607: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1608: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1609: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1609: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1610: {
    width: wp("41%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1610: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1611: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1612: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1459: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1460: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1172: {
    width: wp("26%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_486_1173: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1174: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1175: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1175: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1221: {
    width: wp("58%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_486_1221: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1241: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1242: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1495: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1496: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1180: {
    width: wp("28%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_486_1181: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1182: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1183: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1183: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1225: {
    width: wp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_486_1225: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1257: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1258: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1519: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1520: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1628: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_486_1190: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_486_1192: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_486_1193: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1193: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1229: {
    width: wp("27%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1229: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1273: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1274: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1543: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1544: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1545: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_486_1546: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1547: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1548: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1549: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1549: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1550: {
    width: wp("41%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1550: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1551: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1552: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1567: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1568: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1569: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_486_1570: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1571: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1572: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1573: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1573: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1574: {
    width: wp("41%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1574: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1575: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1576: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1591: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("120%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1592: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1593: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_486_1594: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1595: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1596: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1597: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1597: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1598: {
    width: wp("41%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1598: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1599: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1600: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1615: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1616: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_486_1617: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_486_1618: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1619: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_486_1620: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1621: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_486_1621: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1622: {
    width: wp("41%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_486_1622: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1623: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1624: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1376: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_492_126: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 248, 251, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48
  },
  ImageBackground_486_1378: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("9%")
  },
  View_486_1379: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%")
  },
  View_486_1380: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_486_1381: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_486_1382: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_486_1383: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_486_1386: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("5%")
  },
  TouchableOpacity_486_1387: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_486_1388: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_486_1389: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_486_1392: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_486_1393: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_486_1394: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_486_1399: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_486_1400: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_486_1401: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_486_1404: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_486_1630: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 248, 251, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  TouchableOpacity_486_1405: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%")
  },
  View_486_1406: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_486_1407: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_486_1408: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_486_1409: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_486_1410: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_486_1435: {
    width: wp("41%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "center"
  },
  Text_486_1435: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.44999999999999996,
    textTransform: "none"
  },
  View_486_1412: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1413: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_486_1414: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_486_1417: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1418: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1419: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_486_1420: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_486_1421: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_486_1422: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_486_1423: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_486_1427: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_486_1428: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_486_1433: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_486_1434: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_486_1434: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
