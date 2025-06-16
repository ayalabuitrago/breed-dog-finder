import GithubIcon from "@/assets/icons/github.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import { Label } from "@/features/components/label";
import { Linking, Pressable, View } from "react-native";
import { aboutScreenStyles as styles } from "./styles";

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Label size="2xl" weidth="bold" style={styles.header}>
          Acerca de la aplicación
        </Label>
      </View>
      <View style={styles.descriptionContainer}>
        <Label size="l" weidth="semibold">
          Esta aplicación fue desarrollada como parte del trabajo final del
          curso de Inteligencia Artificial de la Universidad Nacional de
          Ingeniería. Su propósito es poner en práctica los conocimientos
          adquiridos en clase mediante una solución tecnológica funcional.
        </Label>
        <Label>{""}</Label>
        <Label size="l" weidth="bold">
          Desarrolladores:
        </Label>
        <Label size="l" weidth="semibold">
          {"Jefry Ayala             2021-120U"}
        </Label>
        <Label size="l" weidth="semibold">
          {"Eduardo Orozco    2021-0120U"}
        </Label>
        <Label>{""}</Label>
      </View>
      <View>
        <Label size="l" weidth="bold">
          Repositorios:
        </Label>
        <View style={styles.repos}>
          <View style={styles.repoItem}>
            <Label size="l" weidth="bold">
              App móvil
            </Label>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  "https://github.com/ayalabuitrago/breed-dog-finder"
                )
              }
            >
              <GithubIcon width={44} height={44} />
            </Pressable>
          </View>
          <View style={styles.repoItem}>
            <Label size="l" weidth="bold">
              API
            </Label>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  "https://github.com/Eduardo6446/breedDogFinderBackend"
                )
              }
            >
              <GithubIcon width={44} height={44} />
            </Pressable>
          </View>
          <View style={styles.repoItem}>
            <Label size="l" weidth="bold">
              Modelo
            </Label>
            <Pressable onPress={() =>
                Linking.openURL(
                  "https://colab.research.google.com/drive/11VThn6pIEdDvtNrTrpB4_9VaERum6oaC?usp=sharing"
                )
              }>
              <GoogleIcon width={44} height={44} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
