import DefaultIcon from "@/components/icons/defaultIcon";
import IconBanking from "@/components/icons/undraw/banking";
import IconInsurance from "@/components/icons/undraw/insurance";
import IconPayment from "@/components/icons/undraw/payments";
import IconShipping from "@/components/icons/undraw/shipping";
import { Service, ServiceWithIcon } from "@/types/ticket";
import { JSX } from "react";

const iconMap: Record<string, React.FC> = {
  shipping: IconShipping,
  payments: IconPayment,
  banking: IconBanking,
  insurance: IconInsurance,
  default: DefaultIcon,
};

export const getServiceIcon = (serviceName: string): JSX.Element => {
  const Icon = iconMap[serviceName.toLowerCase()] || iconMap.default;
  return <Icon />;
};

export const enrichServiceWithIcon = (service: Service): ServiceWithIcon => ({
  ...service,
  icon: getServiceIcon(service.tag),
});

export const enrichServicesWithIcons = (
  services: Service[]
): ServiceWithIcon[] => services.map(enrichServiceWithIcon);
