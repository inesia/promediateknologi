export interface OfficeLocation {
  id: string
  title: string
  city: string
  address: string
  embedUrl: string
  mapUrl: string
}

/** Shared office locations — same as Contact Us (/kontak) */
export const officeLocations: OfficeLocation[] = [
  {
    id: 'jakarta',
    title: 'Kantor Jakarta',
    city: 'Jakarta',
    address: 'Promedia Teknologi Indonesia (Jakarta)',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2171243477483!2d106.8428395!3d-6.2350852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3677d716bc1%3A0x3d8216b711782ea6!2sPromedia%20Teknologi%20Indonesia%20(Jakarta)!5e0!3m2!1sen!2sid!4v1707900000000!5m2!1sen!2sid',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Promedia+Teknologi+Indonesia+Jakarta',
  },
  {
    id: 'bandung',
    title: 'Kantor Bandung',
    city: 'Bandung',
    address:
      'Jl. Progo No. 06, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.095763303645!2d107.62616!3d-6.927194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7fea1e69c83%3A0x1a1cbd847a0728c2!2sPT%20Promedia%20Teknologi%20Indonesia!5e0!3m2!1sen!2sid!4v1707900000000!5m2!1sen!2sid',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=PT+Promedia+Teknologi+Indonesia+Bandung',
  },
]
