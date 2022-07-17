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
      <View style={styles.View_486_1642}>
        <TouchableOpacity
          style={styles.TouchableOpacity_404_380}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_77"))
          }
        >
          <View style={styles.View_404_381}>
            <View style={styles.View_404_382} />
            <View style={styles.View_404_383}>
              <View style={styles.View_404_384}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3903f9db-7dcb-4813-87db-349e4523578e"
                  }}
                  style={styles.ImageBackground_404_385}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_404_387}>
          <View style={styles.View_404_388}>
            <View style={styles.View_404_389}>
              <View style={styles.View_404_390} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1f04f99-3142-43c1-9ef7-e9a3c894f6e7"
                }}
                style={styles.ImageBackground_404_391}
              />
              <View style={styles.View_404_392} />
            </View>
            <View style={styles.View_404_393}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1d612e3-2c43-48a3-b7de-08fb89ef8226"
                }}
                style={styles.ImageBackground_404_394}
              />
            </View>
            <View style={styles.View_404_398}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72dc98ab-bb73-4015-a104-8d4b70c94f01"
                }}
                style={styles.ImageBackground_404_399}
              />
            </View>
          </View>
          <View style={styles.View_404_404}>
            <View style={styles.View_404_405}>
              <Text style={styles.Text_404_405}>9:27</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_454_304}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce99d6a4-ec45-4581-8e13-f9841dcab8a2"
          }}
          style={styles.ImageBackground_454_305}
        />
      </View>
      <View style={styles.View_486_1643}>
        <View style={styles.View_460_30}>
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/388b9d49-e578-42fe-9002-62806168d184"
            }}
            style={styles.TouchableOpacity_460_31}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("454_264"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd053a4d-e357-4efe-a819-e18aa33d90e4"
            }}
            style={styles.TouchableOpacity_460_46}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("454_264"))
            }
          />
          <View style={styles.View_478_76}>
            <Text style={styles.Text_478_76}>Settings</Text>
          </View>
        </View>
        <View style={styles.View_460_35}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9edcbc5-559c-48e7-b602-c91cc9ae4c3f"
            }}
            style={styles.ImageBackground_460_36}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ba08729-8801-4d28-9903-addb28d4fe8a"
            }}
            style={styles.ImageBackground_460_49}
          />
          <View style={styles.View_478_77}>
            <Text style={styles.Text_478_77}>Safety</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_460_40}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_322"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07ae56f8-a27a-452d-a47d-26c80b2c5a1b"
            }}
            style={styles.ImageBackground_460_41}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02212305-e343-477f-aab8-c2f5118b88be"
            }}
            style={styles.TouchableOpacity_460_53}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_322"))
            }
          />
          <View style={styles.View_478_75}>
            <Text style={styles.Text_478_75}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_486_1644}>
        <View style={styles.View_460_423} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76f37f88-5a99-49df-9363-61830a255c5e"
          }}
          style={styles.ImageBackground_460_424}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcb3b380-5a1f-40c1-85e5-6ccf3732830b"
          }}
          style={styles.ImageBackground_460_425}
        />
        <View style={styles.View_460_426}>
          <Text style={styles.Text_460_426}>2.3km</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f6b49d6-8d0b-4f54-abd8-77a283cccc6e"
        }}
        style={styles.ImageBackground_460_427}
      />
      <View style={styles.View_486_1645}>
        <View style={styles.View_460_429}>
          <Text style={styles.Text_460_429}>Olena Slabko, 24</Text>
        </View>
        <View style={styles.View_460_430}>
          <Text style={styles.Text_460_430}>Dancehall Queen</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/789f4602-9e19-41c3-bc02-f5851ad36bb1"
        }}
        style={styles.ImageBackground_460_437}
      />
      <View style={styles.View_486_1641}>
        <View style={styles.View_460_431}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ca4fdd5-0db3-44ab-9759-2ec0b3b654a5"
            }}
            style={styles.ImageBackground_460_432}
          />
        </View>
        <View style={styles.View_460_433}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a23108f4-8580-462c-8818-dab95052393d"
            }}
            style={styles.ImageBackground_460_434}
          />
        </View>
        <View style={styles.View_460_435}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54d70423-b8dd-428e-9ea1-3250ba91526f"
            }}
            style={styles.ImageBackground_460_436}
          />
        </View>
        <View style={styles.View_486_1636}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0adf0a44-abe2-4d2e-b2e9-159cd46445b0"
            }}
            style={styles.ImageBackground_486_1637}
          />
        </View>
        <View style={styles.View_486_1634}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c2e61ff-94d6-49b9-a809-52c8bb7a55af"
            }}
            style={styles.ImageBackground_486_1635}
          />
        </View>
        <View style={styles.View_486_1638}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/961d1a43-2c0d-423b-a685-0e310d357146"
            }}
            style={styles.ImageBackground_486_1639}
          />
        </View>
      </View>
      <View style={styles.View_486_1633}>
        <TouchableOpacity
          style={styles.TouchableOpacity_467_677}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_77"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/376ba20f-d41c-4010-a26b-e75b47598d01"
          }}
          style={styles.ImageBackground_478_78}
        />
        <View style={styles.View_478_79}>
          <View style={styles.View_478_80}>
            <TouchableOpacity
              style={styles.TouchableOpacity_478_81}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("2_77"))
              }
            >
              <View style={styles.View_478_82}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd2417d8-5eaa-4e2f-bb67-0b52475ed9d5"
                  }}
                  style={styles.ImageBackground_478_83}
                />
              </View>
            </TouchableOpacity>
            <View source={{ uri: "null" }} style={styles.View_478_86} />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_478_87}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_264"))
            }
          >
            <View style={styles.View_478_88}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2aab0642-e0c5-4a59-805d-88ed9d60303c"
                }}
                style={styles.ImageBackground_478_89}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_478_92}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("486_1132"))
            }
          >
            <View style={styles.View_478_93}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/901231c9-64c7-4d93-a1e7-1c21676b6f92"
                }}
                style={styles.ImageBackground_478_94}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.View_478_99}>
            <View style={styles.View_478_100}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e468a45f-8ecb-4eb0-b60d-1e6c97a3f30a"
                }}
                style={styles.ImageBackground_478_101}
              />
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
  View_486_1642: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_404_380: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("6%")
  },
  View_404_381: {
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
  View_404_382: {
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
  View_404_383: {
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
  View_404_384: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_404_385: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_387: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_404_388: {
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
  View_404_389: {
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
  View_404_390: {
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
  ImageBackground_404_391: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_404_392: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_404_393: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_404_394: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_404_398: {
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
  ImageBackground_404_399: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_404: {
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
  View_404_405: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_404_405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_454_304: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("14%")
  },
  ImageBackground_454_305: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_486_1643: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("68%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_30: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2%")
  },
  TouchableOpacity_460_31: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  TouchableOpacity_460_46: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_478_76: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_478_76: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_35: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("-2%")
  },
  ImageBackground_460_36: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_460_49: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_478_77: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_478_77: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_460_40: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  ImageBackground_460_41: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  TouchableOpacity_460_53: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_478_75: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_478_75: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_486_1644: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_423: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_460_424: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_460_425: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_460_426: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_460_426: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_427: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_486_1645: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_429: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_429: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_430: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_460_430: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_437: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%")
  },
  View_486_1641: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_431: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_432: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_460_433: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  ImageBackground_460_434: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_460_435: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%")
  },
  ImageBackground_460_436: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_486_1636: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("133%"),
    top: hp("0%")
  },
  ImageBackground_486_1637: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_486_1634: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99%"),
    top: hp("0%")
  },
  ImageBackground_486_1635: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_486_1638: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("166%"),
    top: hp("0%")
  },
  ImageBackground_486_1639: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_486_1633: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_467_677: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
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
  ImageBackground_478_78: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("7%")
  },
  View_478_79: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_478_80: {
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
  TouchableOpacity_478_81: {
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
  View_478_82: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_478_83: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_478_86: {
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
  TouchableOpacity_478_87: {
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
  View_478_88: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_478_89: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_478_92: {
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
  View_478_93: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_478_94: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_478_99: {
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
  View_478_100: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_478_101: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
