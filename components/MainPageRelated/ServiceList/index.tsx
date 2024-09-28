import { FlatList, View, Text, Dimensions } from "react-native";
import { ServiceListProps, ServiceProps } from "./type";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ASSETS } from "@_assets/assets";

export default function ServiceList({ services, navigate }: ServiceListProps) {
  const LIST_WIDTH = Dimensions.get("screen").width * 0.8;
  const LIST_PADDING = 10;
  const GAP = 10;

  return (
    <FlatList
      data={services}
      renderItem={(item) => (
        <Service
          service={item.item}
          navigate={navigate}
          style={{ width: (LIST_WIDTH - LIST_PADDING * 2 - GAP) / 2 }}
        ></Service>
      )}
      numColumns={2}
      style={{
        width: LIST_WIDTH,
        padding: LIST_PADDING,
      }}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
    ></FlatList>
  );
}

const Service: React.FC<ServiceProps> = ({ service, navigate, style }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(service.screen)}
      style={[
        {
          borderColor: ASSETS.pale,
          borderRadius: 10,
          borderWidth: 3,
          aspectRatio: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 1,
        },
        style,
      ]}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <service.icon size={40} color={"black"}></service.icon>
        <Text>{service.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
