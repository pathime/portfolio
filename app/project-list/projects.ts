import { Project } from "../project/project.component";

export var PROJECTS: Project[] = [
    {
        name: 'Granangular',
        description: 'Turn your voice into a choral swarm. Built with Angular 2, TypeScript and the Web Audio API.',
        paragraphs: [
            'This is a granular synthesiser I built using the Web Audio API, Angular 2 and TypeScript. Granular synthesis is a microsound technique of creating a swarm or stream of sound from many overlapping short ’grains’ of sound. Typically, one source sound would be used to make dozens of microsecond snippets all playing on top of each other. By altering properties such as the pitch and length of the individual grains, or by adding random deviations to these properties, you can change the shape and texture of the resultant sound.', 
            'For this synthesiser, the user can record their own singing or grunting using the computer’s built-in microphone, and then play up to 24 grains of that sound at a time. The grain start position can be controlled by dragging the cursor along the visualised waveform, and the user can alter 7 other parameters such as pitch deviation, stereo spread and reverb send, using the UI sliders. The modular nature of Angular 2 allowed me to build on top of the Web Audio API nodes in a really reusable way. The components I built for reverb, waveform visualisation (with the help of WaveSurferJS), and recording, as well as the service’s role in communication between different components, can be easily extended and used again in other projects.'],
        disclaimer: 'Unfortunately, until I get my SSL sorted, the microphone functionality will not work on Chrome. Load on Firefox instead, or just play with the pre-recorded fallback.',
        url: 'http://pathime.com/granular',
        github: '',
        slug: 'granular'
    },
    {
        name: 'Tingaling',
        description: 'Make sounds with shapes - an HTML Canvas app.',
        paragraphs: [
            'This is a web app aimed at children which explores the relationship between shapes and sounds. Because if there\'s one thing I know about children, it\'s that they love morose electronic music and additive synthesis.',
            'The app consists of 8 shapes, each with their own array of 8 pre-recorded sounds, that can be moved around the screen and will animate to its sound. It is built using the CreateJS HTML Canvas library, and features multi-touch support for tablets.'
        ],
        url: 'http://www.pathime.com/tingaling',
        github: 'http://github.com/pathime/tingaling',
        slug: 'tingaling'
    }
];