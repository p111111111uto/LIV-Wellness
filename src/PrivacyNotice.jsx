import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    title: 'Notice of Privacy Practices',
    subtitle: 'DIVERSE HEALTHCARE & PHARMACY GROUP LLC',
    intro: 'This notice describes how medical information about you may be used and disclosed, and how you can gain access to this information. Please review it carefully.',
    downloadLabel: 'Download PDF',
    downloadHref: '/English-Notice-of-Privacy-Practices.pdf',
    sections: [
      {
        heading: null,
        body: 'Protected health information (PHI), about you, is maintained as a written and/or electronic record of your contacts or visits for healthcare services with our practice. Specifically, PHI is information about you, including demographic information (i.e., name, address, phone, etc.), that may identify you and relates to your past, present or future physical or mental health condition and related healthcare services.\n\nOur practice is required to follow specific rules on maintaining the confidentiality of your PHI, using your information, and disclosing or sharing this information with other healthcare professionals involved in your care and treatment. This Notice describes your rights to access and control your PHI. It also describes how we follow applicable rules and use and disclose your PHI to provide your treatment, obtain payment for services you receive, manage our healthcare operations and for other purposes that are permitted or required by law.',
      },
      {
        heading: 'Your Rights Under The Privacy Rule',
        body: null,
      },
      {
        heading: 'You have the right to receive a copy of this Notice of Privacy Practices',
        body: 'We are required to follow the terms of this notice. We reserve the right to change the terms of our notice, at any time. Upon your request, we will provide you with a revised Notice of Privacy Practices if you call our office and request that a revised copy be sent to you in the mail or ask for one at the time of your next appointment. The Notice will also be posted in a conspicuous location within the practice, and if maintained by the practice, on its website.',
      },
      {
        heading: 'You have the right to authorize other use and disclosure',
        body: 'This means you have the right to authorize any use or disclosure of PHI that is not specified within this notice. For example, we would need your written authorization to use or disclose your PHI for marketing purposes, for most uses or disclosures of psychotherapy notes, or if we intended to sell your PHI. You may revoke an authorization, at any time, in writing, except to the extent that your healthcare provider, or our practice has taken an action in reliance on the use or disclosure indicated in the authorization.',
      },
      {
        heading: 'You have the right to request an alternative means of confidential communication',
        body: 'This means you have the right to ask us to contact you about medical matters using an alternative method (i.e., email, telephone), and to a destination (i.e., cell phone number, alternative address, etc.) designated by you. You must inform us in writing, using a form provided by our practice, how you wish to be contacted if other than the address/phone number that we have on file. We will follow all reasonable requests.',
      },
      {
        heading: 'You have the right to inspect and copy your PHI',
        body: 'This means you may inspect, and obtain a copy of your complete health record. If your health record is maintained electronically, you will also have the right to request a copy in electronic format. We have the right to charge a reasonable fee for paper or electronic copies as established by professional, state, or federal guidelines.',
      },
      {
        heading: 'You have the right to request a restriction of your PHI',
        body: 'This means you may ask us, in writing, not to use or disclose any part of your protected health information for the purposes of treatment, payment or healthcare operations. If we agree to the requested restriction, we will abide by it, except in emergency circumstances when the information is needed for your treatment. In certain cases, we may deny your request for a restriction. You will have the right to request, in writing, that we restrict communication to your health plan regarding a specific treatment or service that you, or someone on your behalf, has paid for in full, out-of-pocket. We are not permitted to deny this specific type of requested restriction.',
      },
      {
        heading: 'You may have the right to request an amendment to your protected health information',
        body: 'This means you may request an amendment of your PHI for as long as we maintain this information. In certain cases, we may deny your request.',
      },
      {
        heading: 'You have the right to request a disclosure accountability',
        body: 'This means that you may request a listing of disclosures that we have made, of your PHI, to entities or persons outside of our office.',
      },
      {
        heading: 'You have the right to receive a privacy breach notice',
        body: 'You have the right to receive written notification if the practice discovers a breach of your unsecured PHI, and determines through a risk assessment that notification is required.',
      },
      {
        heading: 'How We May Use or Disclose Protected Health Information',
        body: 'Following are examples of uses and disclosures of your protected health information that we are permitted to make. These examples are not meant to be exhaustive, but to describe possible types of uses and disclosures.',
      },
      {
        heading: 'Treatment',
        body: 'We may use and disclose your PHI to provide, coordinate, or manage your healthcare and any related services. This includes the coordination or management of your healthcare with a third party that is involved in your care and treatment. For example, we would disclose your PHI, as necessary, to a pharmacy that would fill your prescriptions. We will also disclose PHI to other Healthcare Providers who may be involved in your care and treatment.',
      },
      {
        heading: 'Special Notices',
        body: 'We may use or disclose your PHI, as necessary, to contact you to remind you of your appointment. We may contact you by phone or other means to provide results from exams or tests and to provide information that describes or recommends treatment alternatives regarding your care. Also, we may contact you to provide information about health-related benefits and services offered by our office, for fund-raising activities, or with respect to a group health plan, to disclose information to the health plan sponsor. You will have the right to opt out of such special notices, and each such notice will include instructions for opting out.',
      },
      {
        heading: 'Payment',
        body: 'Your PHI will be used, as needed, to obtain payment for your healthcare services. This may include certain activities that your health insurance plan may undertake before it approves or pays for the healthcare services we recommend for you such as, making a determination of eligibility or coverage for insurance benefits.',
      },
      {
        heading: 'Healthcare Operations',
        body: 'We may use or disclose, as needed, your PHI in order to support the business activities of our practice. This includes, but is not limited to business planning and development, quality assessment and improvement, medical review, legal services, auditing functions and patient safety activities.',
      },
      {
        heading: 'Health Information Organization',
        body: 'The practice may elect to use a health information organization, or other such organization to facilitate the electronic exchange of information for the purposes of treatment, payment, or healthcare operations.',
      },
      {
        heading: 'To Others Involved in Your Healthcare',
        body: 'Unless you object, we may disclose to a member of your family, a relative, a close friend or any other person, that you identify, your PHI that directly relates to that person\'s involvement in your healthcare. If you are unable to agree or object to such a disclosure, we may disclose such information as necessary if we determine that it is in your best interest based on our professional judgment. We may use or disclose PHI to notify or assist in notifying a family member, personal representative or any other person that is responsible for your care, of your general condition or death. If you are not present or able to agree or object to the use or disclosure of the PHI, then your healthcare provider may, using professional judgment, determine whether the disclosure is in your best interest. In this case, only the PHI that is necessary will be disclosed.',
      },
      {
        heading: 'Other Permitted and Required Uses and Disclosures',
        body: 'We are also permitted to use or disclose your PHI without your written authorization for the following purposes: as required by law; for public health activities; health oversight activities; in cases of abuse or neglect; to comply with Food and Drug Administration requirements; research purposes; legal proceedings; law enforcement purposes; coroners; funeral directors; organ donation; criminal activity; military activity; national security; worker\'s compensation; when an inmate in a correctional facility; and if requested by the Department of Health and Human Services in order to investigate or determine our compliance with the requirements of the Privacy Rule.',
      },
      {
        heading: 'Privacy Complaints',
        body: 'You have the right to complain to us, or directly to the Secretary of the Department of Health and Human Services if you believe your privacy rights have been violated by us. You may file a complaint with us by notifying the Privacy Manager. We will not retaliate against you for filing a complaint.\n\nAddress: 8040 NW 95 ST, No. 223\nCity: Hialeah Gardens\nState: FL\nZip Code: 33016',
      },
    ],
  },
  es: {
    title: 'Aviso de Prácticas de Privacidad',
    subtitle: 'DIVERSE HEALTHCARE & PHARMACY GROUP LLC',
    intro: 'El presente aviso describe la forma en que se puede utilizar y divulgar la información médica sobre usted y la forma en que usted puede tener acceso a dicha información. Por favor, léalo con atención.',
    downloadLabel: 'Descargar PDF',
    downloadHref: '/Spanish-Noticia-de-Practicas-de-Privacidad.pdf',
    sections: [
      {
        heading: null,
        body: 'Nuestra promesa a ustedes, nuestros pacientes: Su información es importante y confidencial. Nuestra ética y nuestras normas exigen que su información se mantenga en estricta confidencialidad.\n\nLa ley nos exige que mantengamos la privacidad de la información sobre su salud. También se nos exige que le proporcionemos este Aviso sobre nuestras prácticas de privacidad, obligaciones legales y sus derechos concernientes a su información de salud (Protected Health Information – PHI o Información de Salud Protegida). Debemos respetar las prácticas de privacidad que se describen en el presente Aviso.',
      },
      {
        heading: 'Usos y divulgaciones permitidos sin su autorización escrita',
        body: null,
      },
      {
        heading: 'Tratamiento',
        body: 'Podemos usar y divulgar la PHI a fin de proporcionarle su tratamiento. Por ejemplo, podemos revisar y usar su historial de medicamentos para diagnosticar, proporcionar tratamiento y servicios médicos. Además, podemos divulgar la PHI a otros proveedores de atención médica a fin de proporcionarle la atención adecuada y un tratamiento continuo.',
      },
      {
        heading: 'Pago',
        body: 'Podemos usar o divulgar la PHI para determinar la cobertura, facturación, gestión de reclamos y el reembolso. Por ejemplo, la factura que enviamos a su seguro de salud puede incluir información sobre una cirugía a la que usted se sometió, para que el asegurador nos pague esa cirugía. También podemos informar a su plan de salud sobre un tratamiento que usted va a recibir para determinar si el plan cubrirá el tratamiento.',
      },
      {
        heading: 'Operaciones de atención a la salud',
        body: 'Podemos usar y divulgar la PHI con relación a nuestras operaciones de atención a la salud, entre las que se incluyen actividades de mejoramiento de la calidad, programas de capacitación, acreditación, certificación, emisión de licencias o actividades de certificación de proveedores.',
      },
      {
        heading: 'Exigidos o permitidos por ley',
        body: 'Podemos usar o divulgar la PHI cuando la ley nos exige o nos permite hacerlo. Por ejemplo, podemos divulgar la PHI a las autoridades competentes si creemos razonablemente que usted es una posible víctima de abuso, abandono o violencia doméstica, o es una posible víctima de otros delitos. Además, podemos divulgar la PHI en la medida en que sea necesario para impedir una amenaza grave a su salud o seguridad, o la salud o seguridad de otros.',
      },
      {
        heading: 'Recaudación de fondos',
        body: 'Podemos usar la PHI para comunicarnos con usted a fin de recaudar dinero para nuestras actividades. Los materiales sobre recaudación de fondos que se le envíen incluirán una descripción de la manera en que usted puede dejar de recibir comunicaciones posteriores sobre recaudación de fondos.',
      },
      {
        heading: 'Familia y otras personas involucradas en su cuidado',
        body: 'Podemos usar o divulgar la PHI para notificar a un miembro de su familia, su representante personal u otra persona responsable de su cuidado acerca de su paradero, su estado general o su muerte. Si usted está presente, le daremos la oportunidad de objetar antes de llevar a cabo esos usos o divulgaciones.',
      },
      {
        heading: 'Usos y divulgaciones que requieren su autorización escrita',
        body: null,
      },
      {
        heading: 'Notas de psicoterapia',
        body: 'Debemos obtener su autorización para utilizar o divulgar de cualquier manera las notas sobre su psicoterapia, salvo en ciertas excepciones establecidas por ley.',
      },
      {
        heading: 'Comunicaciones de mercadeo; venta de PHI',
        body: 'Debemos obtener su autorización escrita antes de usar la PHI para fines de mercadeo o para su venta, en concordancia con las definiciones y excepciones establecidas en la HIPAA.',
      },
      {
        heading: 'Sus derechos individuales',
        body: null,
      },
      {
        heading: 'Derecho a inspeccionar y copiar',
        body: 'Usted puede solicitar el acceso a sus registros médicos y a los registros de facturación que mantenemos con el propósito de inspeccionar y solicitar copias de esos registros. Todas las solicitudes de acceso deben presentarse por escrito.',
      },
      {
        heading: 'Derecho a comunicaciones alternativas',
        body: 'Usted puede solicitar por escrito y en forma razonable recibir la PHI por medios alternativos de comunicación o en lugares alternativos y nosotros haremos las adaptaciones necesarias para atender su pedido.',
      },
      {
        heading: 'Derecho a solicitar restricciones',
        body: 'Usted tiene el derecho de solicitar una restricción a la PHI que usamos o divulgamos para fines de tratamiento, pago u operaciones de atención a la salud. Puede solicitar tal restricción por escrito, dirigida a nuestra Oficina.',
      },
      {
        heading: 'Derecho a la nómina de divulgaciones',
        body: 'Mediante solicitud escrita, puede obtener la nómina de las divulgaciones del PHI realizadas por nosotros en los últimos seis años, con sujeción a ciertas restricciones y limitaciones.',
      },
      {
        heading: 'Derecho a solicitar modificación',
        body: 'Usted tiene el derecho de solicitar que modifiquemos su PHI. Debe presentar la solicitud por escrito, explicando por qué debe ser modificada esa información.',
      },
      {
        heading: 'Derecho a obtener aviso',
        body: 'Usted tiene el derecho de obtener una copia impresa de este Aviso presentando la solicitud a nuestra oficina en cualquier momento.',
      },
      {
        heading: 'Derecho a recibir notificación de una infracción',
        body: 'Estamos obligados a notificarlo/a si detectamos una falla en su PHI no segura, de acuerdo con los requisitos establecidos por la ley federal.',
      },
      {
        heading: 'Preguntas o reclamos',
        body: 'Si desea obtener información adicional sobre sus derechos de privacidad, puede comunicarse con la línea de Privacidad de nuestra Oficina de Cumplimiento. También puede presentar un reclamo escrito al Director, Oficina de Derechos Civiles del Departamento de Salud y Servicios Humanos de los EE.UU. No tomaremos represalias contra usted en caso de que presente un reclamo.\n\nDirección: 8040 NW 95 ST, No. 223\nCiudad: Hialeah Gardens\nEstado: FL\nCódigo Postal: 33016',
      },
    ],
  },
};

function PrivacyNotice() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, minHeight: '60vh' }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 1 }}
        >
          {c.title}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, mb: 2 }}
        >
          {c.subtitle}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontStyle: 'italic', mb: 3 }}
        >
          {c.intro}
        </Typography>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            variant="outlined"
            color="primary"
            href={c.downloadHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.downloadLabel}
          </Button>
        </Box>

        {c.sections.map((section, i) => (
          <Box key={i} sx={{ mb: 3 }}>
            {section.heading && (
              <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
                {section.heading}
              </Typography>
            )}
            {section.body && (
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {section.body}
              </Typography>
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default PrivacyNotice;
