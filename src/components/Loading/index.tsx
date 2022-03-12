import { ActivityIndicator } from "react-native";

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

export default function Loading(props: Props) {
  const { loading, children } = props;
  if (!loading) return <>{children}</>;
  return <ActivityIndicator color={"white"} size={"large"} />;
}
