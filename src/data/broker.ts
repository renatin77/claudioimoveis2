export const broker = {
  nome: "Cláudio Imóveis",
  creci: "103666",
  whatsapp: "+5521976852128",
  whatsappDisplay: "(21) 97685-2128",
  email: "",
  descricao:
    "Ajudo familias a realizar o sonho da casa propria. Empreendimentos do programa Minha Casa Minha Vida com parcelas que cabem no seu bolso, lazer completo e localizacao privilegiada no Rio de Janeiro.",
};

export function getWhatsAppLink(propertyTitle?: string): string {
  const message = propertyTitle
    ? `Ola! Quero saber mais sobre o ${propertyTitle}. Pode me passar valores e condicoes?`
    : "Ola! Quero saber mais sobre os apartamentos do Minha Casa Minha Vida. Pode me ajudar?";
  return `https://api.whatsapp.com/send?phone=${broker.whatsapp}&text=${encodeURIComponent(message)}`;
}
