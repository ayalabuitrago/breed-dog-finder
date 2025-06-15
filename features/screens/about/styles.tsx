import { Colors, Spacing } from "@/features/constants/tokens";
import { StyleSheet } from "react-native";

export const aboutScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
    paddingHorizontal: Spacing["2xl"]
  },
  headerContainer: {
    marginTop: Spacing.l,
  },
  header: {
    textAlign: "center",
  },
  descriptionContainer: {
    marginTop: Spacing.m,
  },
  repos: {
    flexDirection: 'row',
    gap: Spacing.m,
    justifyContent: 'space-evenly',
    marginTop: Spacing.m,
  },
  repoItem: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: Spacing.s,
  }

});