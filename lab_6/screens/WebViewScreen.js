import { Platform } from "react-native";
import { WebView } from "react-native-webview";

export default function WebViewScreen({ route }) {
  const { url } = route.params;

  if (Platform.OS === "web") {
    return (
      <iframe
        src={url}
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
        title="website"
      />
    );
  }

  return (
    <WebView
      source={{ uri: url }}
      startInLoadingState={true}
    />
  );
}