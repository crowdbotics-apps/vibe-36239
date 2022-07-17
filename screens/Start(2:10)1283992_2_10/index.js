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
      <View style={styles.View_2_75}>
        <View style={styles.View_2_22}>
          <Text style={styles.Text_2_22}>Find your perfect Vibe</Text>
        </View>
        <View style={styles.View_401_2}>
          <Text style={styles.Text_401_2}>Vibe</Text>
        </View>
      </View>
      <View style={styles.View_2_69}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f8efad2-6de9-4c4f-b4b1-3a799839e491"
          }}
          style={styles.ImageBackground_2_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6e2c358-2173-4fb2-bea5-2c8f8dc453c2"
          }}
          style={styles.ImageBackground_2_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2bf3286-bf18-4d21-a6c6-4763d749d206"
          }}
          style={styles.ImageBackground_2_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/342aeaf0-0043-4ffc-8448-b8e4826640fe"
          }}
          style={styles.ImageBackground_2_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad4cc03b-2f1c-46b7-b082-2c50b311e1e3"
          }}
          style={styles.ImageBackground_2_33}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4f6982c-91e4-4762-8755-feeec4b50f0b"
          }}
          style={styles.ImageBackground_2_34}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13a0b8f6-a18f-4dbd-a91b-ec771587cb28"
          }}
          style={styles.ImageBackground_2_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de797439-7c5b-4ba6-8917-5abf44bac9ac"
          }}
          style={styles.ImageBackground_2_40}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c38d8ade-0182-4123-881a-568de0e3c16c"
          }}
          style={styles.ImageBackground_2_42}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5858249f-2666-4b3f-8619-a46512e3ff3f"
          }}
          style={styles.ImageBackground_2_41}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9478cb7-e638-43ac-9e91-f27ff2aab95a"
          }}
          style={styles.ImageBackground_2_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/868e9084-0c9d-4a4e-beb9-4bdfc11de1cf"
          }}
          style={styles.ImageBackground_2_37}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf885930-4804-44f5-bdd4-e942d1253139"
          }}
          style={styles.ImageBackground_2_38}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7188c49b-3093-47c7-be96-95b7cf5b420c"
          }}
          style={styles.ImageBackground_2_68}
        />
        <View style={styles.View_2_44}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e67a6a5e-6812-4506-8105-d73b6e6b27b6"
            }}
            style={styles.ImageBackground_2_45}
          />
          <View style={styles.View_2_46}>
            <View style={styles.View_2_47}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfa7faa2-13e2-47ea-9d3d-c5c6fba4cb24"
                }}
                style={styles.ImageBackground_2_48}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c90d700e-ec60-4de3-a4a3-3e231786ba67"
                }}
                style={styles.ImageBackground_2_49}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b43637e-8809-4bfb-8b45-3a3961469c07"
                }}
                style={styles.ImageBackground_2_50}
              />
              <View style={styles.View_2_51}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cec47973-508b-44d3-8220-586c10c80453"
                  }}
                  style={styles.ImageBackground_2_52}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72bc6311-1d30-46a2-a34b-a3d6608ab6d8"
                  }}
                  style={styles.ImageBackground_2_53}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36c7a3aa-1b10-4881-b348-a5200992c201"
                  }}
                  style={styles.ImageBackground_2_54}
                />
              </View>
            </View>
            <View style={styles.View_2_55}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36ff7ef4-2234-4a35-98e5-4f3ac3991afb"
                }}
                style={styles.ImageBackground_2_56}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/279e0b0a-861a-4e3f-8e9f-290c6e1c287f"
                }}
                style={styles.ImageBackground_2_57}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60bae329-289d-4fc8-8d2a-39a798f46bfe"
                }}
                style={styles.ImageBackground_2_58}
              />
            </View>
            <View style={styles.View_2_59}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1b15c5c-dcbc-4902-a35e-d969c8da2a80"
                }}
                style={styles.ImageBackground_2_60}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49bf740c-c674-44e7-af28-6e688cea5419"
                }}
                style={styles.ImageBackground_2_62}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b19d42b-26fb-499a-9f16-6f2346787373"
                }}
                style={styles.ImageBackground_2_63}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62dd55d2-4e96-4345-b4d8-762dcb4ad7d8"
            }}
            style={styles.ImageBackground_2_64}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41373020-7b27-4643-94fd-c61c90d31272"
            }}
            style={styles.ImageBackground_2_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f960b0fc-59c8-4b0b-810b-972acfcc8421"
            }}
            style={styles.ImageBackground_2_67}
          />
        </View>
      </View>
      <View style={styles.View_2_76}>
        <View style={styles.View_2_70}>
          <Text style={styles.Text_2_70}>
            xxxxxx xxxx x x xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx
            xxxxxxxxxxxxxxx?
          </Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_74}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_210"))
          }
        >
          <View style={styles.View_2_72} />
          <View style={styles.View_2_73}>
            <Text style={styles.Text_2_73}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5be8a850-6866-4d61-8e09-890fafd04eea"
        }}
        style={styles.ImageBackground_492_2}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 248, 251, 1)" },
  View_2: { height: hp("111%") },
  View_2_75: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%")
  },
  View_2_22: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_22: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_2: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_2: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 51,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 8.96,
    textTransform: "none"
  },
  View_2_69: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("33%")
  },
  ImageBackground_2_30: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("9%")
  },
  ImageBackground_2_31: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_2_29: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("16%")
  },
  ImageBackground_2_32: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("22%")
  },
  ImageBackground_2_33: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("24%")
  },
  ImageBackground_2_34: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("7%")
  },
  ImageBackground_2_39: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%")
  },
  ImageBackground_2_40: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("10%")
  },
  ImageBackground_2_42: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("30%")
  },
  ImageBackground_2_41: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("36%")
  },
  ImageBackground_2_36: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("13%")
  },
  ImageBackground_2_37: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("15%")
  },
  ImageBackground_2_38: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("31%")
  },
  ImageBackground_2_68: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%")
  },
  View_2_44: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  ImageBackground_2_45: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_46: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_47: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_48: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_49: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_50: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("1%")
  },
  View_2_51: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_2_52: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_53: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_54: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("-3%")
  },
  View_2_55: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_56: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_57: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_58: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("1%")
  },
  View_2_59: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_60: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_62: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_63: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("0%")
  },
  ImageBackground_2_64: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_65: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_67: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_76: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("79%")
  },
  View_2_70: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_70: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_74: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_2_72: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 73, 127, 1)"
  },
  View_2_73: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_73: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_492_2: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("5%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
