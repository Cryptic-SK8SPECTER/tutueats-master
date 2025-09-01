import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { NotificationItem, CustomScrollView, Header } from "../components";
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
  const navigation = useNavigation();
  // Função para navegação entre rotas
  const handleTabPress = (index) => {
    const routes = ["Home", "Filter", "Order", "Favorite", "Notifications"];
    navigation.navigate(routes[index]);
  };
  const notifications = [
    {
      id: 1,
      type: "delivery",
      title: "Pedido Saiu para Entrega",
      message:
        "Seu pedido (#12345) saiu para entrega. Fique atento ao nosso entregador.",
      time: "26 de fev às 12:36",
    },
    {
      id: 2,
      type: "deal",
      title: "Oferta por Tempo Limitado",
      message:
        "Aproveite 30% de desconto em todos os produtos da categoria eletrônicos!",
      time: "26 de fev às 14:20",
    },
    {
      id: 3,
      type: "confirmed",
      title: "Reserva Confirmada",
      message:
        "Sua reserva no restaurante Sabor Mineiro foi confirmada para hoje às 20:00.",
      time: "26 de fev às 15:45",
    },
    {
      id: 4,
      type: "reminder",
      title: "Lembrete de Pagamento",
      message:
        "Seu boleto vence em 2 dias. Evite multas e juros realizando o pagamento.",
      time: "27 de fev às 09:15",
    },
    {
      id: 5,
      type: "security",
      title: "Atividade Suspeita Detectada",
      message:
        "Uma nova tentativa de login foi detectada. Verifique se foi você.",
      time: "27 de fev às 11:30",
    },
    {
      id: 6,
      type: "success",
      title: "Pagamento Aprovado",
      message: "Seu pagamento no valor de R$ 149,90 foi aprovado com sucesso!",
      time: "27 de fev às 16:55",
    },
    {
      id: 7,
      type: "cancelled",
      title: "Compra Cancelada",
      message:
        "Sua compra do produto 'Fone Bluetooth' foi cancelada conforme solicitado.",
      time: "28 de fev às 10:40",
    },
    {
      id: 8,
      type: "update",
      title: "Atualização do App",
      message:
        "Nova versão disponível! Atualize agora para ter acesso às novidades.",
      time: "28 de fev às 13:25",
    },
    {
      id: 9,
      type: "delivery",
      title: "Pedido Entregue",
      message:
        "Seu pedido (#12345) foi entregue com sucesso. Avalie sua experiência!",
      time: "28 de fev às 18:10",
    },
    {
      id: 10,
      type: "promotional",
      title: "Frete Grátis Hoje!",
      message:
        "Aproveite frete grátis em todas as compras acima de R$ 99 hoje apenas!",
      time: "29 de fev às 08:00",
    },
    {
      id: 11,
      type: "alert",
      title: "Produto Esgotado",
      message:
        "O produto 'Smartwatch XYZ' que você visualizou acaba de esgotar.",
      time: "29 de fev às 14:30",
    },
    {
      id: 12,
      type: "welcome",
      title: "Bem-vindo ao App!",
      message:
        "Obrigado por se cadastrar. Ganhe 10% de desconto na primeira compra!",
      time: "1 de mar às 07:45",
    },
  ];

  const handleMarkAsRead = (notificationId) => {
    console.log(`Marking notification ${notificationId} as read`);
  };

  return (
    <View style={styles.container}>
      <Header />

      {/* Notifications List */}
      <CustomScrollView>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            title={notification.title}
            message={notification.message}
            time={notification.time}
            onMarkAsRead={() => handleMarkAsRead(notification.id)}
          />
        ))}
      </CustomScrollView>

      {/* Bottom Tab Bar */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0",
  },
  headerLeft: {
    width: 40,
  },
  profilePicture: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E8F4F8",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartBadge: {
    backgroundColor: "#00C896",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  cartBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  cartIcon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  cartIconText: {
    fontSize: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: {
    fontSize: 12,
    color: "#999999",
  },
});

export default NotificationScreen;
