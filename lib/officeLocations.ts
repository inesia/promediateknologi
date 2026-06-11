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
    address:
      'Jl. Tebet Barat Dalam I, No.37B LT2, RT.14/RW.3, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2171243477483!2d106.8428395!3d-6.2350852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3677d716bc1%3A0x3d8216b711782ea6!2sPromedia%20Teknologi%20Indonesia%20(Jakarta)!5e0!3m2!1sen!2sid!4v1707900000000!5m2!1sen!2sid',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Jl.+Tebet+Barat+Dalam+I,+No.37B+LT2,+Tebet+Bar.,+Kec.+Tebet,+Kota+Jakarta+Selatan,+DKI+Jakarta+12810',
  },
  {
    id: 'bandung',
    title: 'Kantor Bandung',
    city: 'Bandung',
    address:
      'Jl. Terusan Halimun No.52, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40263',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.095763303645!2d107.62616!3d-6.927194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7fea1e69c83%3A0x1a1cbd847a0728c2!2sPT%20Promedia%20Teknologi%20Indonesia!5e0!3m2!1sen!2sid!4v1707900000000!5m2!1sen!2sid',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Jl.+Terusan+Halimun+No.+52,+Lkr.+Sel.,+Kec.+Lengkong,+Kota+Bandung,+Jawa+Barat+40263',
  },
]
