export interface DomainNavigationItem {
  readonly key: string;
  readonly path: string;
  readonly icon: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
}

export const PRODUCT_NAVIGATION: readonly DomainNavigationItem[] = [
  {
    key: 'shipments',
    path: 'shipments',
    icon: 'local_shipping',
    label: 'Sevkiyatlar',
    title: 'Sevkiyat Yönetimi',
    description: 'Gönderileri rota, taşıyıcı ve teslim tarihleriyle uçtan uca yönetin.',
  },
  {
    key: 'document-checks',
    path: 'document-checks',
    icon: 'fact_check',
    label: 'Belge Kontrolü',
    title: 'Belge Kontrolü',
    description: 'Fatura, çeki listesi, konşimento ve sertifikaları doğrulayın.',
  },
  {
    key: 'parties',
    path: 'parties',
    icon: 'handshake',
    label: 'Taraf Doğrulama',
    title: 'Taraf ve Firma Doğrulama',
    description: 'Gönderici, alıcı, taşıyıcı ve gümrük müşavirlerini doğrulayın.',
  },
  {
    key: 'customs',
    path: 'customs',
    icon: 'assured_workload',
    label: 'Gümrük İşlemleri',
    title: 'Gümrük ve Beyan Yönetimi',
    description: 'GTİP, beyan, vergi ve kontrol durumlarını takip edin.',
  },
  {
    key: 'delivery-proof',
    path: 'delivery-proof',
    icon: 'inventory',
    label: 'Teslim Kanıtı',
    title: 'Teslim ve Kanıt Yönetimi',
    description: 'POD, hasar, sıcaklık ve teslim alan kişi kayıtlarını yönetin.',
  },
];
