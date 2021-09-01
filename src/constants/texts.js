const texts = {
  urgentCase: {
    description:
      'Baseado em suas respostas, é provável que esta situação se enquadre como caso suspeito de doença causada pelo coronavírus 2019 (COVID-19). No entanto, isto não se trata de um diagnóstico.',
    information:
      'A orientação é que você procure atendimento em um serviço de urgência mais próximo para avaliação clínica ou disque SAMU 192.',
    tipsTitle:
      'Caso opte se deslocar para um serviço de urgência, siga as seguintes medidas de proteçãoo individual e etiqueta respiratória:',
    tips: [
      'Opte por ter um acompanhante para auxiliá-lo no deslocamento até o serviço de urgência. O acompanhante deve utilizar uma máscara facial e lavar constantemente os mãos com água e sabão ou álcool em gel.',
      'Busque imediatamente o serviço, não faça desvios de caminho e evite transporte públicos.',
      'Utilize máscara facial para evitar a transmissão de outras pessoas durante o trajeto para o serviço de urgência.',
      'Lave as mãos frequentemente com água e sabão ou higiene com álcool em gel 70%.',
      'Cubra a boca e nariz com um lenço de papel ao tossir e/ou espirrar e jogue no lixo após o uso, ou proteja com o antebraço (nunca com as mãos).',
      'Evite locais com aglomeração de pessoas. Não compartilhe objetos de uso pessoal.',
    ],
    gov:
      'Em caso de dúvidas, ligue para o Disque Saúde 136 do Ministério de Saúde, ou procure uma unidade de saúde.',
  },
  probableCase: {
    description:
      'Baseado em suas respostas, é provável que esta situação se enquadre como caso suspeito de doença causada pelo coronavírus 2019 (COVID-19). No entanto, isto não se trata de um diagnóstico.',
    information:
      'A orientação é que você procure atendimento em uma unidade de saúde mais próxima para avaliação clínica.',
    tipsTitle:
      'Caso opte se deslocar para um serviço de saúde, siga as seguintes medidas de proteçãoo individual e etiqueta respiratória:',
    tips: [
      'Utilize máscara facial para evitar a transmissão de outras pessoas durante o trajeto para o serviço de urgência.',
      'Lave as mãos frequentemente com água e sabão ou higiene com álcool em gel 70%.',
      'Cubra a boca e nariz com um lenço de papel ao tossir e/ou espirrar e jogue no lixo após o uso, ou proteja com o antebraço (nunca com as mãos).',
      'Evite locais com aglomeração de pessoas. Não compartilhe objetos de uso pessoal.',
    ],
    gov:
      'Em caso de dúvidas, ligue para o Disque Saúde 136 do Ministério de Saúde, ou procure uma unidade de saúde.',
  },
  improbableCase: {
    description:
      'Baseado em suas respostas, é provável que esta situação NÃO se enquadre como caso suspeito de doença causada pelo coronavírus 2019 (COVID-19).',
    information:
      'Mantenha as condutas de precaução e prevenção, praticando a etiqueta respiratória:',
    tipsTitle:
      'Caso opte se deslocar para um serviço de saúde, siga as seguintes medidas de proteçãoo individual e etiqueta respiratória:',
    tips: [
      'Utilize máscara facial para evitar a transmissão de outras pessoas durante o trajeto para o serviço de urgência.',
      'Lave as mãos frequentemente com água e sabão ou higiene com álcool em gel 70%.',
      'Cubra a boca e nariz com um lenço de papel ao tossir e/ou espirrar e jogue no lixo após o uso, ou proteja com o antebraço (nunca com as mãos).',
      'Evite locais com aglomeração de pessoas. Não compartilhe objetos de uso pessoal.',
    ],
    gov:
      'Em caso de dúvidas, ligue para o Disque Saúde 136 do Ministério de Saúde, ou procure uma unidade de saúde.',
  },
  householdIsolation: {
    description:
      'Baseado em suas respostas, é provável que esta situação NÃO se enquadre como caso suspeito de doença causada pelo coronavírus 2019 (COVID-19).',
    information:
      'Entretanto recomendamos que você mantenha o isolamento domiciliar conforme recomendado pela OMS',
    tipsTitle: 'Siga as seguintes medidas para garantir um isolamento seguro:',
    tips: [
      'Toda vez que lavar as mãos com água e sabão, dar preferência ao papel-toalha. Caso não seja possível, utilizar toalha de tecido e trocá-la sempre que ficar úmida.',
      'Todos os moradores da casa devem cobrir a boca e o nariz quando forem tossir ou espirrar, seja com as mãos ou máscaras. Lavar as mãos e jogar as máscaras fora após o uso.',
      'Limpar frequentemente (mais de uma vez por dia) as superfícies que são frequentemente tocadas com solução contendo alvejante (1 parte de alvejante para 99 partes de água); faça o mesmo para banheiros e toaletes.',
      'Lave roupas pessoais, roupas de cama e roupas de banho do paciente com sabão comum e água entre 60-90°C, deixe secar.',
    ],
    gov:
      'Em caso de dúvidas, ligue para o Disque Saúde 136 do Ministério de Saúde, ou procure uma unidade de saúde.',
  },
  tips: {
    tip_1:
      'Lave regularmente e cuidadosamente as mãos com água e sabão, ou higienize-as com álcool em gel 70%.',
    tip_2:
      'Mantenha pelo menos 2 metros de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.',
    tip_3: 'Evite tocar os olhos, nariz e boca com as mãos não lavadas.',
    tip_4:
      'Cubra a boca e o nariz ao espirrar ou tossir. Você pode usar o antebraço ou um lenço para isso.',
    tip_5:
      'Mantenha os ambientes bem ventilados e limpe regularmente as superficies.',
    tip_6: 'Evite o compartilhamento de Objetos de uso pessoal.',
    tip_7: 'Assim você evita se contaminar ou contaminar outras pessoas.',
  },
  helps: {
    help_1: {
      title: 'Fique em Casa',
      text:
        'Ao ficar em casa você ajuda a controlar a disseminação do vírus e a reduzir a superlotação nas unidades de saúde',
    },
    help_2: {
      title: 'Ajude Alguém',
      text:
        'Algumas pessoas não podem sair de casa por estarem no grupo de risco. Caso conheça alguém nessa situação, auxilie ela da forma que você puder',
    },
    help_3: {
      title: 'Faça Doações',
      text:
        'Diversos estabelecimentos estão recebendo doeções para direcionar a pessoas que estão passando por dificuldades',
    },
    help_4: {
      title: 'Não Estoque',
      text:
        'Apesar da quarentena, supermercados e fornecedores de alimentos não irão fechar e nem sofrer com desabastecimento. Caso as pessoas comecem a estocar alimentos e materias de higiene, esses items irão entrar em escassez.',
    },
  },
};

export default texts;
