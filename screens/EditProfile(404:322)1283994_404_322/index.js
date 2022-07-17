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
      <View style={styles.View_492_153}>
        <View style={styles.View_458_2}>
          <View style={styles.View_458_3}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/436b0383-ddcb-4f39-8959-93cece856aee"
              }}
              style={styles.ImageBackground_458_4}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/825738c8-a923-414a-9686-9de4bae623c2"
              }}
              style={styles.ImageBackground_458_5}
            />
            <View style={styles.View_458_6}>
              <Text style={styles.Text_458_6}>Olena</Text>
            </View>
            <View style={styles.View_458_7}>
              <Text style={styles.Text_458_7}>Berlin, Germany</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f20f8956-dc43-44c6-86c6-5df68fd4e878"
              }}
              style={styles.ImageBackground_458_28}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21f0614f-9b71-4aae-80bb-0966eee38c2b"
          }}
          style={styles.ImageBackground_460_173}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09271379-bb4c-42af-ae87-74346b5fba21"
          }}
          style={styles.ImageBackground_460_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e2e5a14-0cfd-420f-aa33-9154a15c121c"
          }}
          style={styles.ImageBackground_460_175}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6297df33-f10c-417d-8825-2c53b2cb5975"
          }}
          style={styles.ImageBackground_460_182}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/129b7b5c-27a5-4417-9e5e-04999de856fe"
          }}
          style={styles.ImageBackground_460_258}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1257f7f9-9df8-4a05-97e7-c6ab9aa266c4"
          }}
          style={styles.ImageBackground_460_264}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66a25a88-6178-4542-8e20-6ea20f5c6116"
          }}
          style={styles.ImageBackground_460_269}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6aac17c-5e73-4319-8974-6472781f6ecd"
          }}
          style={styles.ImageBackground_460_274}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f9bd2e0-0179-43e7-a4ce-d8ce7c21d3fe"
          }}
          style={styles.ImageBackground_460_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a1e1cc5-1e57-4310-a633-6314698a3205"
          }}
          style={styles.ImageBackground_460_401}
        />
        <View style={styles.View_490_23}>
          <View style={styles.View_490_5}>
            <View style={styles.View_460_216} />
            <View style={styles.View_460_217}>
              <Text style={styles.Text_460_217}>Yes</Text>
            </View>
          </View>
          <View style={styles.View_490_7}>
            <View style={styles.View_460_220} />
            <View style={styles.View_460_222}>
              <Text style={styles.Text_460_222}>Yes</Text>
            </View>
          </View>
          <View style={styles.View_490_9}>
            <View style={styles.View_460_224} />
            <View style={styles.View_460_226}>
              <Text style={styles.Text_460_226}>Yes</Text>
            </View>
          </View>
          <View style={styles.View_490_11}>
            <View style={styles.View_460_228} />
            <View style={styles.View_460_230}>
              <Text style={styles.Text_460_230}>Yes</Text>
            </View>
          </View>
          <View style={styles.View_490_13}>
            <View style={styles.View_460_232} />
            <View style={styles.View_460_234}>
              <Text style={styles.Text_460_234}>Yes</Text>
            </View>
          </View>
          <View style={styles.View_490_15}>
            <View style={styles.View_460_238}>
              <Text style={styles.Text_460_238}>Yes</Text>
            </View>
            <View style={styles.View_460_236} />
          </View>
          <View style={styles.View_490_17}>
            <View style={styles.View_460_240} />
            <View style={styles.View_460_242}>
              <Text style={styles.Text_460_242}>Yes</Text>
            </View>
          </View>
          <View style={styles.View_490_19}>
            <View style={styles.View_460_244} />
            <View style={styles.View_460_246}>
              <Text style={styles.Text_460_246}>Yes</Text>
            </View>
          </View>
          <View style={styles.View_490_21}>
            <View style={styles.View_460_248} />
            <View style={styles.View_460_250}>
              <Text style={styles.Text_460_250}>Yes</Text>
            </View>
          </View>
          <View style={styles.View_490_6}>
            <View style={styles.View_460_218} />
            <View style={styles.View_460_219}>
              <Text style={styles.Text_460_219}>No</Text>
            </View>
          </View>
          <View style={styles.View_490_8}>
            <View style={styles.View_460_221} />
            <View style={styles.View_460_223}>
              <Text style={styles.Text_460_223}>No</Text>
            </View>
          </View>
          <View style={styles.View_490_10}>
            <View style={styles.View_460_225} />
            <View style={styles.View_460_227}>
              <Text style={styles.Text_460_227}>No</Text>
            </View>
          </View>
          <View style={styles.View_490_12}>
            <View style={styles.View_460_229} />
            <View style={styles.View_460_231}>
              <Text style={styles.Text_460_231}>No</Text>
            </View>
          </View>
          <View style={styles.View_490_14}>
            <View style={styles.View_460_233} />
            <View style={styles.View_460_235}>
              <Text style={styles.Text_460_235}>No</Text>
            </View>
          </View>
          <View style={styles.View_490_16}>
            <View style={styles.View_460_237} />
            <View style={styles.View_460_239}>
              <Text style={styles.Text_460_239}>No</Text>
            </View>
          </View>
          <View style={styles.View_490_18}>
            <View style={styles.View_460_241} />
            <View style={styles.View_460_243}>
              <Text style={styles.Text_460_243}>No</Text>
            </View>
          </View>
          <View style={styles.View_490_20}>
            <View style={styles.View_460_245} />
            <View style={styles.View_460_247}>
              <Text style={styles.Text_460_247}>No</Text>
            </View>
          </View>
          <View style={styles.View_490_22}>
            <View style={styles.View_460_249} />
            <View style={styles.View_460_251}>
              <Text style={styles.Text_460_251}>No</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_460_252}>
          <View style={styles.View_460_253} />
          <View style={styles.View_460_176}>
            <Text style={styles.Text_460_176}>About Me</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0721cff0-d1f6-4a8c-a047-69318ca6c3cc"
            }}
            style={styles.ImageBackground_460_177}
          />
        </View>
        <View style={styles.View_460_255}>
          <View style={styles.View_460_256} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea27ade2-cbac-47a6-b707-3141ecb070b7"
            }}
            style={styles.ImageBackground_460_181}
          />
          <View style={styles.View_460_180}>
            <Text style={styles.Text_460_180}>Interests</Text>
          </View>
        </View>
        <View style={styles.View_460_267}>
          <View style={styles.View_490_35}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1eafad2c-526a-47b1-8897-e1db9901b8a2"
              }}
              style={styles.ImageBackground_460_265}
            />
            <View style={styles.View_460_266}>
              <Text style={styles.Text_460_266}>Living In</Text>
            </View>
            <View style={styles.View_460_301}>
              <Text style={styles.Text_460_301}>Berlin, Germany</Text>
            </View>
            <View style={styles.View_460_268} />
          </View>
        </View>
        <View style={styles.View_490_36}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3276568d-e392-4e8d-b4d8-e7aa46cc384b"
            }}
            style={styles.ImageBackground_460_270}
          />
          <View style={styles.View_460_271}>
            <Text style={styles.Text_460_271}>Gender</Text>
          </View>
          <View style={styles.View_460_272}>
            <View style={styles.View_460_273} />
            <View style={styles.View_460_302}>
              <Text style={styles.Text_460_302}>Female</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_460_277}>
          <View style={styles.View_460_278} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4a9c2a9-e41b-44fa-be4c-f149b6be1dc3"
            }}
            style={styles.ImageBackground_460_275}
          />
          <View style={styles.View_460_276}>
            <Text style={styles.Text_460_276}>Sexual Orientation</Text>
          </View>
        </View>
        <View style={styles.View_460_282}>
          <View style={styles.View_460_288}>
            <Text style={styles.Text_460_288}>Dont show my age</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/883a2bb6-b8fc-46c3-8753-1d40ed8781a5"
            }}
            style={styles.ImageBackground_460_290}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a72c89b-982c-4281-96e6-b75fd75eb3f4"
            }}
            style={styles.ImageBackground_460_291}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e94a7f8d-9bb9-4508-9d8a-84f6fc005d36"
            }}
            style={styles.ImageBackground_460_421}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ff574d1-c663-4b6f-87f9-8051c1403c1e"
            }}
            style={styles.ImageBackground_460_419}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26052e1a-8370-4976-865d-c8c82fb2a5d2"
            }}
            style={styles.ImageBackground_460_402}
          />
          <View style={styles.View_460_403}>
            <Text style={styles.Text_460_403}>Manage Your Profile</Text>
          </View>
        </View>
        <View style={styles.View_460_149}>
          <View style={styles.View_490_47}>
            <View style={styles.View_490_46}>
              <View style={styles.View_490_43}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_460_133}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("404_379")
                    )
                  }
                >
                  <View style={styles.View_460_134} />
                </TouchableOpacity>
                <View style={styles.View_490_56}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c734f964-3112-4cd2-96d8-265f7eb748f7"
                    }}
                    style={styles.ImageBackground_460_140}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d38ba476-17fc-4448-b888-e338d9ae095c"
                    }}
                    style={styles.ImageBackground_460_141}
                  />
                </View>
              </View>
              <View style={styles.View_490_44}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_460_135}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("404_379")
                    )
                  }
                >
                  <View style={styles.View_460_136} />
                </TouchableOpacity>
                <View style={styles.View_490_55}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a177e33-f83c-49e6-b7e1-6aee86451d59"
                    }}
                    style={styles.ImageBackground_460_145}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81c9f356-840f-4d20-b7dd-eec01e859fe5"
                    }}
                    style={styles.ImageBackground_460_146}
                  />
                </View>
              </View>
              <View style={styles.View_490_42}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_460_116}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("404_379")
                    )
                  }
                >
                  <View style={styles.View_460_117} />
                </TouchableOpacity>
                <View style={styles.View_490_54}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de154528-e02d-467a-a78f-f7d161db5c1a"
                    }}
                    style={styles.ImageBackground_460_129}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa3c25bc-79fc-48bb-b6fa-56d24a658102"
                    }}
                    style={styles.ImageBackground_460_130}
                  />
                </View>
              </View>
              <View style={styles.View_490_41}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_460_114}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("404_379")
                    )
                  }
                >
                  <View style={styles.View_460_115} />
                </TouchableOpacity>
                <View style={styles.View_490_53}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca922a46-a30b-4ec5-ba3a-a25ce38fba81"
                    }}
                    style={styles.ImageBackground_460_124}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfdd3cb5-c511-4b1b-816b-6c9a8d1675ef"
                    }}
                    style={styles.ImageBackground_460_125}
                  />
                </View>
              </View>
              <View style={styles.View_490_37}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_460_66}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("404_379")
                    )
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21846690-b81f-4186-b787-ad9197928fb9"
                    }}
                    style={styles.ImageBackground_460_67}
                  />
                </TouchableOpacity>
                <View style={styles.View_490_52}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47a9882d-4b9f-4679-9c79-40e76c3c5d66"
                    }}
                    style={styles.ImageBackground_452_14}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fd61ef4-ff9f-4346-a758-6a690449a7f4"
                    }}
                    style={styles.ImageBackground_460_156}
                  />
                </View>
              </View>
              <View style={styles.View_490_38}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_460_78}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("404_379")
                    )
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/945d8724-d306-4b34-90c9-dd4df05f6d86"
                    }}
                    style={styles.ImageBackground_460_79}
                  />
                </TouchableOpacity>
                <View style={styles.View_490_51}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce40ff53-a118-4965-b1df-2e7103eb5410"
                    }}
                    style={styles.ImageBackground_460_160}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41bcc5de-b117-43b5-b30f-5fe63450bcf7"
                    }}
                    style={styles.ImageBackground_460_162}
                  />
                </View>
              </View>
              <View style={styles.View_490_39}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_460_90}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("404_379")
                    )
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81e784a5-1b8b-44ae-9bc1-4cb6449261c9"
                    }}
                    style={styles.ImageBackground_460_91}
                  />
                </TouchableOpacity>
                <View style={styles.View_490_50}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8694b343-53f6-4910-b191-cfd5d302dc4c"
                    }}
                    style={styles.ImageBackground_460_164}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cfc4245-536d-4bbd-816c-b84f9c8b1fef"
                    }}
                    style={styles.ImageBackground_460_166}
                  />
                </View>
              </View>
              <View style={styles.View_490_40}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_460_112}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("404_379")
                    )
                  }
                >
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3558a6c0-dfe5-4c00-947a-cde2e4db00d6"
                    }}
                    style={styles.ImageBackground_460_113}
                  />
                </TouchableOpacity>
                <View style={styles.View_490_49}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d76ac536-c607-4b7a-8632-4fd10d137ef8"
                    }}
                    style={styles.ImageBackground_460_168}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7b80eea-7c31-40bd-b797-115774aec7d7"
                    }}
                    style={styles.ImageBackground_460_170}
                  />
                </View>
              </View>
              <View style={styles.View_490_45}>
                <TouchableOpacity
                  style={styles.TouchableOpacity_460_137}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("404_379")
                    )
                  }
                >
                  <View style={styles.View_460_138} />
                </TouchableOpacity>
                <View style={styles.View_490_48}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8262eed-b109-459d-8065-91581b1b4f09"
                    }}
                    style={styles.ImageBackground_460_150}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13e04053-0a09-4bbb-ab5e-7a6b315310c3"
                    }}
                    style={styles.ImageBackground_460_151}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_460_154}>
            <Text style={styles.Text_460_154}>Edit</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_460_155}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_379"))
            }
          >
            <Text style={styles.Text_460_155}>Preview</Text>
          </TouchableOpacity>
          <View style={styles.View_460_172}>
            <Text style={styles.Text_460_172}>
              Add a video, picture or Loop to increase your chances of getting a
              vibe{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_490_33}>
          <View style={styles.View_490_24}>
            <View style={styles.View_460_198}>
              <Text style={styles.Text_460_198}>Drinking</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7de3b33c-d05f-43eb-9b7c-f42b298da7f6"
              }}
              style={styles.ImageBackground_460_313}
            />
          </View>
          <View style={styles.View_490_25}>
            <View style={styles.View_460_200}>
              <Text style={styles.Text_460_200}>Smoking</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31d3e402-118d-46ac-9074-fa7d98f17e71"
              }}
              style={styles.ImageBackground_460_314}
            />
          </View>
          <View style={styles.View_490_26}>
            <View style={styles.View_460_202}>
              <Text style={styles.Text_460_202}>Pets</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8dcf9910-a059-4dbb-8dd0-cb581683f05b"
              }}
              style={styles.ImageBackground_460_324}
            />
          </View>
          <View style={styles.View_490_27}>
            <View style={styles.View_460_204}>
              <Text style={styles.Text_460_204}>Workout</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3c1e83d-738f-45c3-8339-4a58263fa020"
              }}
              style={styles.ImageBackground_460_331}
            />
          </View>
          <View style={styles.View_490_28}>
            <View style={styles.View_460_206}>
              <Text style={styles.Text_460_206}>Sports</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6029dd7-9973-470a-841f-dd0e2b514530"
              }}
              style={styles.ImageBackground_460_349}
            />
          </View>
          <View style={styles.View_490_29}>
            <View style={styles.View_460_208}>
              <Text style={styles.Text_460_208}>Big time texter</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29c41d5a-6818-4891-a6f2-e8aed81adce9"
              }}
              style={styles.ImageBackground_460_382}
            />
          </View>
          <View style={styles.View_490_30}>
            <View style={styles.View_460_210}>
              <Text style={styles.Text_460_210}>Video chatter</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/213817c8-d23c-4b73-9b1c-b90bda853906"
              }}
              style={styles.ImageBackground_460_384}
            />
          </View>
          <View style={styles.View_490_31}>
            <View style={styles.View_460_212}>
              <Text style={styles.Text_460_212}>Meet in person</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3126aa0d-b3eb-4122-a9c8-3b996b9e8841"
              }}
              style={styles.ImageBackground_460_386}
            />
          </View>
          <View style={styles.View_490_32}>
            <View style={styles.View_460_214}>
              <Text style={styles.Text_460_214}>Phone caller</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7f880ba-a7d2-401f-8537-517718160898"
              }}
              style={styles.ImageBackground_460_387}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12d2c955-4dc4-4f07-a952-a6e71a4fe7c2"
            }}
            style={styles.ImageBackground_460_183}
          />
          <View style={styles.View_460_184}>
            <Text style={styles.Text_460_184}>Lifestyle</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c1eb32d-e1fb-4c7a-b588-46d249607823"
            }}
            style={styles.ImageBackground_460_186}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2369c802-597a-4b35-88e5-be0102598def"
            }}
            style={styles.ImageBackground_460_188}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/330df76d-bbf6-478b-b32d-96297f3a9537"
            }}
            style={styles.ImageBackground_460_192}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c592af05-960e-4a69-859b-18009705cd35"
            }}
            style={styles.ImageBackground_460_190}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50f3bbb6-65fe-4f28-b07b-be982cd071f8"
            }}
            style={styles.ImageBackground_460_193}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0533ea9e-cea5-4d19-9c5c-94584c008e7f"
            }}
            style={styles.ImageBackground_460_189}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0337de6f-bb19-4750-8b58-bf7e82c45d15"
            }}
            style={styles.ImageBackground_460_194}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd518440-715d-4568-bd00-884aee1ac863"
            }}
            style={styles.ImageBackground_460_191}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f7c8911-2ac8-4e29-b321-7c9a84bac4af"
            }}
            style={styles.ImageBackground_460_195}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23d96dd4-3c18-40b9-8fa7-b18912b420a5"
          }}
          style={styles.ImageBackground_460_392}
        />
        <View style={styles.View_460_261}>
          <View style={styles.View_460_262} />
          <View style={styles.View_490_34}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f5df7e0-5f45-4775-a462-ac5636737286"
              }}
              style={styles.ImageBackground_460_259}
            />
            <View style={styles.View_460_260}>
              <Text style={styles.Text_460_260}>Education</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_492_154}>
        <View style={styles.View_492_155} />
      </View>
      <View style={styles.View_490_57}>
        <View style={styles.View_492_152} />
        <TouchableOpacity
          style={styles.TouchableOpacity_404_323}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_379"))
          }
        >
          <View style={styles.View_404_324}>
            <View style={styles.View_404_325} />
            <View style={styles.View_404_326}>
              <View style={styles.View_404_327}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/109f747a-1245-467f-863f-e366aaf9b58b"
                  }}
                  style={styles.ImageBackground_404_328}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_404_330}>
          <View style={styles.View_404_331}>
            <View style={styles.View_404_332}>
              <View style={styles.View_404_333} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a8f24d8-6401-42c0-8b39-748fc80ccdf7"
                }}
                style={styles.ImageBackground_404_334}
              />
              <View style={styles.View_404_335} />
            </View>
            <View style={styles.View_404_336}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d4ff7ff-f7c8-4dfc-b40c-67637c29fc65"
                }}
                style={styles.ImageBackground_404_337}
              />
            </View>
            <View style={styles.View_404_341}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fa5a170-2402-4781-951e-82356ccf7f7c"
                }}
                style={styles.ImageBackground_404_342}
              />
            </View>
          </View>
          <View style={styles.View_404_347}>
            <View style={styles.View_404_348}>
              <Text style={styles.Text_404_348}>9:27</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_502_15}>
          <TouchableOpacity
            style={styles.TouchableOpacity_502_8}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("401_42"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_460_303}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_379"))
            }
          >
            <Text style={styles.Text_460_303}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 248, 251, 1)" },
  View_2: { height: hp("111%") },
  View_492_153: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_458_2: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_458_3: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_458_4: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_458_5: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_458_6: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_458_6: {
    color: "rgba(23, 24, 33, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_458_7: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_458_7: {
    color: "rgba(246, 87, 87, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_458_28: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_460_173: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("124%")
  },
  ImageBackground_460_52: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%")
  },
  ImageBackground_460_175: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("153%")
  },
  ImageBackground_460_182: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("174%")
  },
  ImageBackground_460_258: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("228%")
  },
  ImageBackground_460_264: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("240%")
  },
  ImageBackground_460_269: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("252%")
  },
  ImageBackground_460_274: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("264%")
  },
  ImageBackground_460_279: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("275%")
  },
  ImageBackground_460_401: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("275%")
  },
  View_490_23: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_490_5: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_216: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_217: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_217: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_7: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_220: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_222: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_222: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_9: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_224: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_226: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_226: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_11: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_228: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_230: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_230: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_13: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_232: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_234: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_234: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_15: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_238: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_238: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_236: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_490_17: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_240: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_242: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_242: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_19: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_244: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_246: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_246: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_21: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_248: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_250: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_250: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_6: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_218: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_219: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_219: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_8: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_221: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_223: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_223: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_10: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_225: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_227: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_227: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_12: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_229: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_231: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_231: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_14: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_233: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_235: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_235: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_16: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_237: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_239: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_239: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_18: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_241: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_243: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_243: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_20: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_245: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_247: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_247: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_22: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_249: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_460_251: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_251: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_252: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_253: {
    width: wp("91%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_460_176: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("-5%"),
    justifyContent: "flex-start"
  },
  Text_460_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_177: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("-4%")
  },
  View_460_255: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_256: {
    width: wp("91%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  ImageBackground_460_181: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("-4%")
  },
  View_460_180: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("-5%"),
    justifyContent: "flex-start"
  },
  Text_460_180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_267: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("242%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_490_35: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-5%")
  },
  ImageBackground_460_265: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_460_266: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_266: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_301: {
    width: wp("31%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_460_301: {
    color: "rgba(246, 87, 87, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_268: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_490_36: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("249%")
  },
  ImageBackground_460_270: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_460_271: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_272: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_273: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_460_302: {
    width: wp("31%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_460_302: {
    color: "rgba(246, 87, 87, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_277: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("265%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_278: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  ImageBackground_460_275: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("-4%")
  },
  View_460_276: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("-5%"),
    justifyContent: "flex-start"
  },
  Text_460_276: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_282: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("277%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_288: {
    width: wp("36%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_460_288: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_290: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_460_291: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_460_421: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_460_419: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_402: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("-4%")
  },
  View_460_403: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("-5%"),
    justifyContent: "flex-start"
  },
  Text_460_403: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_149: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("39%")
  },
  View_490_47: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_490_46: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_490_43: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  },
  TouchableOpacity_460_133: {
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
  View_460_134: {
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
  View_490_56: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("14%")
  },
  ImageBackground_460_140: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_141: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_490_44: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("43%")
  },
  TouchableOpacity_460_135: {
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
  View_460_136: {
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
  View_490_55: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%")
  },
  ImageBackground_460_145: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_146: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_490_42: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("21%")
  },
  TouchableOpacity_460_116: {
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
  View_460_117: {
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
  View_490_54: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%")
  },
  ImageBackground_460_129: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_130: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_490_41: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("22%")
  },
  TouchableOpacity_460_114: {
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
  View_460_115: {
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
  View_490_53: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%")
  },
  ImageBackground_460_124: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_125: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_490_37: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  TouchableOpacity_460_66: {
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
  ImageBackground_460_67: {
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
  View_490_52: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("14%")
  },
  ImageBackground_452_14: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_156: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_490_38: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  TouchableOpacity_460_78: {
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
  ImageBackground_460_79: {
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
  View_490_51: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%")
  },
  ImageBackground_460_160: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_162: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_490_39: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%")
  },
  TouchableOpacity_460_90: {
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
  ImageBackground_460_91: {
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
  View_490_50: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%")
  },
  ImageBackground_460_164: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_166: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_490_40: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  TouchableOpacity_460_112: {
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
  ImageBackground_460_113: {
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
  View_490_49: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("14%")
  },
  ImageBackground_460_168: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_170: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_490_45: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("43%")
  },
  TouchableOpacity_460_137: {
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
  View_460_138: {
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
  View_490_48: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%")
  },
  ImageBackground_460_150: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_151: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_460_154: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_154: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_460_155: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_155: {
    color: "rgba(157, 156, 161, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_172: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_460_172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_33: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("177%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_490_24: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_198: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_198: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_313: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_490_25: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_200: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_200: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_314: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_490_26: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_202: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_202: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_324: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_490_27: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_204: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_204: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_331: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_490_28: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_206: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_206: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_349: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_490_29: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_208: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_208: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_382: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_490_30: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_210: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_210: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_384: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_490_31: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_212: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_212: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_386: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_490_32: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_214: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_214: {
    color: "rgba(47, 49, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_387: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_460_183: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("-5%")
  },
  View_460_184: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("-5%"),
    justifyContent: "flex-start"
  },
  Text_460_184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_460_186: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("3%")
  },
  ImageBackground_460_188: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("8%")
  },
  ImageBackground_460_192: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("30%")
  },
  ImageBackground_460_190: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("19%")
  },
  ImageBackground_460_193: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("41%")
  },
  ImageBackground_460_189: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("14%")
  },
  ImageBackground_460_194: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("35%")
  },
  ImageBackground_460_191: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("24%")
  },
  ImageBackground_460_195: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("46%")
  },
  ImageBackground_460_392: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_460_261: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("230%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_262: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2
  },
  View_490_34: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("-5%")
  },
  ImageBackground_460_259: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_460_260: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_154: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_492_155: {
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
  View_490_57: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_492_152: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    backgroundColor: "rgba(255, 248, 251, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  TouchableOpacity_404_323: {
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
  View_404_324: {
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
  View_404_325: {
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
  View_404_326: {
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
  View_404_327: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_404_328: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_330: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_404_331: {
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
  View_404_332: {
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
  View_404_333: {
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
  ImageBackground_404_334: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_404_335: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_404_336: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_404_337: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_404_341: {
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
  ImageBackground_404_342: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_404_347: {
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
  View_404_348: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_404_348: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_502_15: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("7%")
  },
  TouchableOpacity_502_8: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 248, 251, 1)"
  },
  TouchableOpacity_460_303: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_460_303: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
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
