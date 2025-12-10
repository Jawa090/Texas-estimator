import type { Trade } from '../types';

export const trades: Trade[] = [
  {
    id: '1',
    name: 'Concrete',
    description: 'Comprehensive concrete estimating including foundations, slabs, walls, and structural elements. We provide detailed quantity takeoffs and cost analysis for all concrete work.',
    deliverables: [
      'Concrete volume calculations',
      'Reinforcement schedules',
      'Formwork requirements',
      'Labour and equipment costs',
      'Finishing specifications'
    ],
    icon: 'Layers'
  },
  {
    id: '2',
    name: 'Masonry',
    description: 'Expert masonry estimating for brickwork, blockwork, and stone construction. Includes mortar calculations, joint specifications, and specialized masonry techniques.',
    deliverables: [
      'Brick and block quantities',
      'Mortar calculations',
      'Joint and pointing specs',
      'Scaffolding requirements',
      'Labour time estimates'
    ],
    icon: 'Square'
  },
  {
    id: '3',
    name: 'Carpentry',
    description: 'Detailed carpentry and joinery estimates covering structural timber, finish carpentry, and custom millwork. Includes material specifications and labour analysis.',
    deliverables: [
      'Timber quantity schedules',
      'Joinery specifications',
      'Hardware requirements',
      'Installation sequences',
      'Finish material costs'
    ],
    icon: 'Hammer'
  },
  {
    id: '4',
    name: 'Drywall',
    description: 'Complete drywall and partition estimating including framing, boarding, taping, and finishing. Covers both standard and specialized drywall systems.',
    deliverables: [
      'Drywall area calculations',
      'Framing material lists',
      'Joint compound quantities',
      'Fastener specifications',
      'Labour productivity rates'
    ],
    icon: 'Grid3x3'
  },
  {
    id: '5',
    name: 'Painting',
    description: 'Professional painting and decorating estimates including surface preparation, primer, and finish coats. Covers interior and exterior applications.',
    deliverables: [
      'Surface area calculations',
      'Paint quantity requirements',
      'Preparation specifications',
      'Equipment and tool costs',
      'Application time estimates'
    ],
    icon: 'Palette'
  },
  {
    id: '6',
    name: 'Roofing',
    description: 'Comprehensive roofing estimates for all roofing systems including materials, labour, and accessories. Covers pitched and flat roof applications.',
    deliverables: [
      'Roof area measurements',
      'Material quantity schedules',
      'Flashing and trim specs',
      'Insulation requirements',
      'Installation labour costs'
    ],
    icon: 'Triangle'
  },
  {
    id: '7',
    name: 'Steel/Metal',
    description: 'Structural steel and metalwork estimating including fabrication and erection costs. Covers structural frames, miscellaneous metals, and architectural metalwork.',
    deliverables: [
      'Steel tonnage calculations',
      'Fabrication specifications',
      'Connection details',
      'Erection sequences',
      'Surface treatment costs'
    ],
    icon: 'Wrench'
  },
  {
    id: '8',
    name: 'Landscaping',
    description: 'Complete landscaping and site work estimates including earthwork, paving, planting, and irrigation systems. Covers both hard and soft landscaping.',
    deliverables: [
      'Earthwork quantities',
      'Paving area calculations',
      'Plant and material schedules',
      'Irrigation system costs',
      'Maintenance specifications'
    ],
    icon: 'Trees'
  },
  {
    id: '9',
    name: 'Electrical',
    description: 'Detailed electrical system estimates including power distribution, lighting, controls, and specialized systems. Covers all electrical trades and installations.',
    deliverables: [
      'Electrical load calculations',
      'Cable and conduit schedules',
      'Panel and device lists',
      'Labour installation times',
      'Testing and commissioning'
    ],
    icon: 'Zap'
  },
  {
    id: '10',
    name: 'Plumbing & HVAC',
    description: 'Comprehensive mechanical system estimates covering plumbing, heating, ventilation, and air conditioning. Includes all piping, equipment, and controls.',
    deliverables: [
      'Piping system takeoffs',
      'Equipment specifications',
      'Ductwork calculations',
      'Control system costs',
      'Installation labour analysis'
    ],
    icon: 'Thermometer'
  }
];