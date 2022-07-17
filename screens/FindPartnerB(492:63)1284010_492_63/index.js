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
      <View style={styles.View_492_140}>
        <View style={styles.View_492_124} />
        <View style={styles.View_492_64}>
          <View style={styles.View_492_65} />
          <View style={styles.View_492_66} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/954909f1-391c-4964-8c4b-2060adac5234"
            }}
            style={styles.ImageBackground_492_67}
          />
          <View style={styles.View_492_68}>
            <View style={styles.View_492_69} />
            <View style={styles.View_492_70}>
              <View style={styles.View_492_71}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0a6e8fc-5692-4727-bd1c-1f73a4417bd3"
                  }}
                  style={styles.ImageBackground_492_72}
                />
              </View>
            </View>
            <View style={styles.View_492_75}>
              <Text style={styles.Text_492_75}>2.3km</Text>
            </View>
          </View>
          <View style={styles.View_492_76}>
            <Text style={styles.Text_492_76}>Michael, 25</Text>
          </View>
          <View style={styles.View_492_77}>
            <Text style={styles.Text_492_77}>IT Admin/Footballer</Text>
          </View>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7bc5070-a116-4021-ac6b-de0e71100f76"
          }}
          style={styles.TouchableOpacity_492_121}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_264"))
          }
        />
        <View style={styles.View_502_27}>
          <View style={styles.View_492_145}>
            <View style={styles.View_492_146} />
            <View style={styles.View_492_147}>
              <Text style={styles.Text_492_147}>Share</Text>
            </View>
          </View>
          <View style={styles.View_502_24}>
            <View style={styles.View_502_23} />
            <View style={styles.View_492_142}>
              <Text style={styles.Text_492_142}>
                My Interests Hiking, partying, raves, clubbing
              </Text>
            </View>
          </View>
          <View style={styles.View_502_26}>
            <View style={styles.View_502_25} />
            <View style={styles.View_492_125}>
              <Text style={styles.Text_492_125}>About me</Text>
            </View>
            <View style={styles.View_492_141}>
              <Text style={styles.Text_492_141}>
                i like raves, like to party and make new friends. anyone up for
                sightseeing tomorrow, hit me up lets plan looking to meet
                someone to vibe with in Berlin...
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_492_127}>
        <View style={styles.View_486_1377} />
        <TouchableOpacity
          style={styles.TouchableOpacity_492_133}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("478_152"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0982de1c-e2d9-40f0-bad1-56101ebd8805"
            }}
            style={styles.ImageBackground_492_134}
          />
          <View style={styles.View_492_135}>
            <View style={styles.View_492_136}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94764ecb-35e0-476e-8db6-f3c3d6641aac"
                }}
                style={styles.ImageBackground_492_137}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_492_128}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6054392d-ad19-4030-adad-e659d093b670"
            }}
            style={styles.ImageBackground_492_129}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2544d8b8-3925-4cec-a96b-4e1cfc837a69"
            }}
            style={styles.ImageBackground_492_130}
          />
        </View>
      </View>
      <View style={styles.View_492_94}>
        <View style={styles.View_492_139} />
        <TouchableOpacity
          style={styles.TouchableOpacity_492_95}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_77"))
          }
        >
          <View style={styles.View_492_96}>
            <View style={styles.View_492_97} />
            <View style={styles.View_492_98}>
              <View style={styles.View_492_99}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a22892e-5a40-4ae0-bb30-2532f66a2035"
                  }}
                  style={styles.ImageBackground_492_100}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_492_102}>
          <View style={styles.View_492_103}>
            <View style={styles.View_492_104}>
              <View style={styles.View_492_105} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa930fb8-264d-4d04-925e-1fb1e8fc63fc"
                }}
                style={styles.ImageBackground_492_106}
              />
              <View style={styles.View_492_107} />
            </View>
            <View style={styles.View_492_108}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68e700f9-0846-4de7-b599-f07fb559c490"
                }}
                style={styles.ImageBackground_492_109}
              />
            </View>
            <View style={styles.View_492_113}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab839fa5-ee86-4cf5-a8b4-b8216dc14a7d"
                }}
                style={styles.ImageBackground_492_114}
              />
            </View>
          </View>
          <View style={styles.View_492_119}>
            <View style={styles.View_492_120}>
              <Text style={styles.Text_492_120}>9:27</Text>
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
  View_492_140: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_492_124: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("60%"),
    backgroundColor: "rgba(241, 73, 127, 1)",
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48
  },
  View_492_64: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  View_492_65: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 73, 127, 1)",
    opacity: 0.5
  },
  View_492_66: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(241, 73, 127, 1)"
  },
  ImageBackground_492_67: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_492_68: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("6%")
  },
  View_492_69: {
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
  View_492_70: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_492_71: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_492_72: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_492_75: {
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
  Text_492_75: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_76: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_492_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_77: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_492_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_492_121: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  View_502_27: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_492_145: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_492_146: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(59, 30, 159, 1)"
  },
  View_492_147: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_492_147: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_502_24: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("30%")
  },
  View_502_23: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.699999988079071,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48
  },
  View_492_142: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_492_142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_502_26: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_502_25: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.699999988079071,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48
  },
  View_492_125: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_492_125: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_141: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_492_141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_127: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%")
  },
  View_486_1377: {
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
  TouchableOpacity_492_133: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("2%")
  },
  ImageBackground_492_134: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_492_135: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_492_136: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_492_137: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_492_128: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("2%")
  },
  ImageBackground_492_129: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_492_130: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_492_94: {
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
  View_492_139: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    backgroundColor: "rgba(255, 248, 251, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  TouchableOpacity_492_95: {
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
  View_492_96: {
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
  View_492_97: {
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
  View_492_98: {
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
  View_492_99: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_492_100: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_492_102: {
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
  View_492_103: {
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
  View_492_104: {
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
  View_492_105: {
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
  ImageBackground_492_106: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_492_107: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_492_108: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_492_109: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_492_113: {
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
  ImageBackground_492_114: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_492_119: {
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
  View_492_120: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_492_120: {
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
