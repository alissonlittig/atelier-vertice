export type Obra = {
  slug: string; nome: string; tipo: 'Residencial' | 'Corporativo' | 'Cultural' | 'Reforma' | 'Hospitalidade';
  cidade: string; ano: number; area: number; status: 'Concluída' | 'Em obra';
  resumo: string; texto: string[]; ficha: [string, string][]; forma: number; paleta: [string, string, string];
};
export const obras: Obra[] = [
  { slug: 'casa-do-pinhal', nome: 'Casa do Pinhal', tipo: 'Residencial', cidade: 'Campos do Jordão', ano: 2024, area: 410, status: 'Concluída',
    resumo: 'Casa de concreto aparente suspensa sobre o declive, aberta para as araucárias.',
    texto: ['O terreno cai quase seis metros em trinta. Em vez de aterrar, a casa pousa em dois muros de concreto e deixa o declive correr por baixo.', 'Os quartos ficam recolhidos no volume inferior; sala e cozinha formam um único salão com vista contínua para o pinhal.'],
    ficha: [['Estrutura', 'Concreto aparente e aço'], ['Equipe', '6 arquitetos'], ['Prazo de obra', '22 meses']], forma: 0, paleta: ['#d9d2c5', '#8a7f6e', '#2f3a2e'] },
  { slug: 'torre-aurora', nome: 'Torre Aurora', tipo: 'Corporativo', cidade: 'Curitiba', ano: 2023, area: 18200, status: 'Concluída',
    resumo: 'Edifício comercial com fachada de brises verticais e térreo aberto à cidade.',
    texto: ['A torre libera o térreo como praça coberta. Os brises de alumínio mudam de ângulo ao longo da fachada e reduzem em 31% a carga térmica.', 'Pavimentos de 1.100 m² sem pilares internos, com núcleo deslocado para a empena cega.'],
    ficha: [['Certificação', 'LEED Gold (fictício)'], ['Pavimentos', '17'], ['Prazo de obra', '34 meses']], forma: 1, paleta: ['#cfd6d9', '#6d7c82', '#1d2a30'] },
  { slug: 'museu-do-sal', nome: 'Museu do Sal', tipo: 'Cultural', cidade: 'Cabo Frio', ano: 2025, area: 3600, status: 'Em obra',
    resumo: 'Museu em abóbadas de tijolo, em diálogo com as antigas salinas.',
    texto: ['Uma sequência de abóbadas de tijolo maciço cria salas de luz zenital difusa. A cobertura recolhe água da chuva para o espelho d’água.', 'A obra emprega mão de obra local e tijolos produzidos a menos de 40 km do terreno.'],
    ficha: [['Estrutura', 'Alvenaria armada e abóbadas'], ['Programa', 'Acervo, auditório, café'], ['Previsão', 'Dezembro de 2026']], forma: 2, paleta: ['#e6d3c3', '#b0683f', '#3b2a22'] },
  { slug: 'sobrado-ladeira', nome: 'Sobrado da Ladeira', tipo: 'Reforma', cidade: 'Paraty', ano: 2022, area: 260, status: 'Concluída',
    resumo: 'Restauro de sobrado do século XIX com anexo contemporâneo em madeira.',
    texto: ['Preservamos fachada, esquadrias e o piso de pedra. O programa novo mora num anexo leve, em madeira, que não toca as paredes originais.', 'O pátio central virou o coração da casa: cozinha, jardim e escada convivem num só espaço.'],
    ficha: [['Intervenção', 'Restauro e anexo'], ['Material', 'Cumaru e cal'], ['Prazo de obra', '14 meses']], forma: 3, paleta: ['#e0dccf', '#9a8c6a', '#33301f'] },
  { slug: 'hotel-restinga', nome: 'Hotel Restinga', tipo: 'Hospitalidade', cidade: 'Florianópolis', ano: 2024, area: 5400, status: 'Concluída',
    resumo: 'Hotel de 48 quartos em pavilhões baixos entre dunas e vegetação de restinga.',
    texto: ['Pavilhões de um andar seguem as curvas da duna e mantêm toda a vegetação nativa existente. Passarelas elevadas substituem ruas.', 'Cada quarto tem varanda profunda e ventilação cruzada; o ar-condicionado é opcional na maior parte do ano.'],
    ficha: [['Quartos', '48'], ['Estrutura', 'Madeira laminada e aço'], ['Prazo de obra', '26 meses']], forma: 4, paleta: ['#dfe3d6', '#7d8a6a', '#26301f'] },
  { slug: 'residencial-vale', nome: 'Residencial Vale', tipo: 'Residencial', cidade: 'São Paulo', ano: 2023, area: 7800, status: 'Concluída',
    resumo: 'Conjunto de 64 apartamentos com pátios internos e circulação aberta.',
    texto: ['Dois blocos curvos abraçam um jardim central e criam galerias de circulação ventiladas, que funcionam como rua elevada.', 'Todas as unidades têm duas orientações e varanda com no mínimo 2,2 m de profundidade.'],
    ficha: [['Unidades', '64'], ['Estrutura', 'Concreto armado'], ['Prazo de obra', '30 meses']], forma: 5, paleta: ['#e5ddd2', '#a68e76', '#3a2d24'] },
  { slug: 'sede-cooperativa', nome: 'Sede da Cooperativa', tipo: 'Corporativo', cidade: 'Londrina', ano: 2025, area: 2900, status: 'Em obra',
    resumo: 'Sede administrativa com grande cobertura em shed e pátio de convivência.',
    texto: ['Uma cobertura em sheds serrilhados traz luz norte constante aos escritórios e produz parte da energia com painéis solares.', 'Os ambientes de trabalho se organizam em torno de um pátio arborizado que serve também à comunidade de associados.'],
    ficha: [['Estrutura', 'Aço e laje mista'], ['Energia', '82 kWp fotovoltaicos'], ['Previsão', 'Maio de 2027']], forma: 6, paleta: ['#dcd9d2', '#7b756a', '#2a2824'] },
  { slug: 'biblioteca-do-rio', nome: 'Biblioteca do Rio', tipo: 'Cultural', cidade: 'Porto Alegre', ano: 2022, area: 4100, status: 'Concluída',
    resumo: 'Biblioteca pública em ponte habitada sobre o arroio, com estantes que viram arquibancada.',
    texto: ['O edifício cruza o arroio em um único vão de 42 metros. Sob ele, um parque alagável absorve as cheias.', 'No interior, a rampa de estantes se converte em arquibancada para leituras e eventos.'],
    ficha: [['Vão livre', '42 m'], ['Estrutura', 'Treliça metálica'], ['Prazo de obra', '28 meses']], forma: 7, paleta: ['#d5dde0', '#5f7a85', '#1e2c33'] },
];
export const tipos = ['Residencial', 'Corporativo', 'Cultural', 'Reforma', 'Hospitalidade'] as const;
