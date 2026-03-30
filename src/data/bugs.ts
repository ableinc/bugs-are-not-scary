export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface BugInfo {
  id: string;
  name: string;
  emoji: string;
  color: string;
  tagline: string;
  description: string;
  habitat: string;
  diet: string;
  funFacts: string[];
  quizQuestion: QuizQuestion;
}

export const bugs: BugInfo[] = [
  {
    id: 'ladybug',
    name: 'Ladybug',
    emoji: '🐞',
    color: '#e53935',
    tagline: 'A tiny red friend with polka dots!',
    description:
      'Ladybugs are small, round beetles with bright red or orange shells covered in black spots. They are very gentle and helpful! Farmers love ladybugs because they eat tiny pests that hurt plants.',
    habitat:
      'Ladybugs live in gardens, fields, and forests. They like to hang out on leaves and flowers. In winter, they snuggle together in big groups to stay warm!',
    diet: 'Ladybugs love to eat tiny bugs called aphids. One ladybug can eat up to 50 aphids in a single day! They also munch on small insects and pollen.',
    funFacts: [
      'A ladybug can eat up to 5,000 aphids in its lifetime!',
      'Ladybugs come in many colors — red, orange, yellow, and even pink!',
      'When scared, ladybugs play dead to trick predators.',
      'The spots on a ladybug help scare away birds.',
    ],
    quizQuestion: {
      question: 'What do ladybugs love to eat?',
      options: ['Pizza', 'Aphids (tiny bugs)', 'Leaves'],
      correctIndex: 1,
    },
  },
  {
    id: 'butterfly',
    name: 'Butterfly',
    emoji: '🦋',
    color: '#8e24aa',
    tagline: 'A colorful flyer with painted wings!',
    description:
      'Butterflies are beautiful insects with big, colorful wings. They start life as caterpillars and then transform into butterflies inside a chrysalis. This amazing change is called metamorphosis!',
    habitat:
      'Butterflies live in gardens, meadows, and tropical forests all around the world. They love sunny spots with lots of flowers to visit.',
    diet: 'Butterflies drink nectar from flowers using a long, curly tongue called a proboscis. It works like a tiny straw! Some butterflies also sip juice from ripe fruit.',
    funFacts: [
      'Butterflies taste with their feet!',
      'Some butterflies can fly over 3,000 miles when they migrate!',
      'Butterfly wings are actually see-through — the colors come from tiny scales.',
      'There are about 20,000 different kinds of butterflies!',
    ],
    quizQuestion: {
      question: 'What is the curly tongue of a butterfly called?',
      options: ['A sniffer', 'A proboscis', 'A tentacle'],
      correctIndex: 1,
    },
  },
  {
    id: 'caterpillar',
    name: 'Caterpillar',
    emoji: '🐛',
    color: '#43a047',
    tagline: 'A fuzzy crawler that becomes a butterfly!',
    description:
      'Caterpillars are baby butterflies and moths! They have soft, squishy bodies with lots of tiny legs. Some are fuzzy, some are stripy, and some have cool patterns to scare away birds.',
    habitat:
      'Caterpillars live on plants and trees. They hang out on the leaves they like to eat. You can find them in gardens, parks, and forests.',
    diet: 'Caterpillars are BIG eaters! They munch on leaves all day long to grow big and strong. Some caterpillars eat so much, they grow 100 times their original size!',
    funFacts: [
      'Caterpillars have 12 eyes but can barely see!',
      'A caterpillar has more muscles than a human — over 4,000!',
      'Some caterpillars can squirt acid to scare predators away!',
      'Caterpillars make silk, just like spiders.',
    ],
    quizQuestion: {
      question: 'What do caterpillars grow up to become?',
      options: ['Ladybugs', 'Butterflies or moths', 'Bees'],
      correctIndex: 1,
    },
  },
  {
    id: 'bee',
    name: 'Bee',
    emoji: '🐝',
    color: '#fdd835',
    tagline: 'A buzzy helper that makes honey!',
    description:
      'Bees are fuzzy, flying insects with yellow and black stripes. They are super important because they help flowers grow by spreading pollen. Honeybees even make delicious honey!',
    habitat:
      'Bees live in hives or nests. Honeybees build amazing waxy honeycombs inside their hive, where they store honey and raise baby bees. Some bees live alone in tiny holes in the ground.',
    diet: 'Bees drink nectar from flowers, which they turn into honey. They also collect pollen to feed their babies. A single bee visits hundreds of flowers every day!',
    funFacts: [
      'Bees do a special wiggle dance to tell friends where flowers are!',
      'A bee visits about 2 million flowers to make one jar of honey.',
      'Honeybees can fly up to 15 miles per hour!',
      'Bees have five eyes — two big ones and three tiny ones on top!',
    ],
    quizQuestion: {
      question: 'How do bees tell their friends where flowers are?',
      options: ['They sing', 'They do a wiggle dance', 'They draw a map'],
      correctIndex: 1,
    },
  },
  {
    id: 'ant',
    name: 'Ant',
    emoji: '🐜',
    color: '#6d4c41',
    tagline: 'A tiny but super strong team worker!',
    description:
      "Ants are small insects that live and work together in big groups called colonies. They are incredibly strong — an ant can carry something 50 times its own weight! That's like you lifting a car!",
    habitat:
      'Ants build their homes underground, in wood, or under rocks. Their nests have many rooms and tunnels, like a tiny city! Some ant colonies have millions of ants living together.',
    diet: 'Ants eat almost anything! They love sugary foods, seeds, other insects, and even fungus. Some ants are farmers — they grow their own food in underground gardens!',
    funFacts: [
      'Ants can lift 50 times their own body weight!',
      'There are over 10,000 different kinds of ants.',
      "Ants don't have ears — they feel vibrations with their feet!",
      'Some queen ants can live for 30 years!',
    ],
    quizQuestion: {
      question: 'How much weight can an ant carry?',
      options: ['2 times its weight', '50 times its weight', '5 times its weight'],
      correctIndex: 1,
    },
  },
  {
    id: 'dragonfly',
    name: 'Dragonfly',
    emoji: '🪁',
    color: '#0288d1',
    tagline: 'A speedy flyer with giant sparkly eyes!',
    description:
      'Dragonflies are amazing flyers with four see-through wings and enormous eyes. They can fly forward, backward, sideways, and even hover in one spot like a tiny helicopter!',
    habitat:
      'Dragonflies live near ponds, lakes, streams, and wetlands. Baby dragonflies live underwater for months before growing wings and taking to the sky!',
    diet: 'Dragonflies are expert hunters! They catch mosquitoes, gnats, and other small flying insects right out of the air. They eat hundreds of mosquitoes every day — thank you, dragonflies!',
    funFacts: [
      'Dragonflies have been around for 300 million years — before dinosaurs!',
      'A dragonfly can see in almost every direction at once!',
      'Dragonflies can fly up to 35 miles per hour!',
      'Ancient dragonflies had wingspans of over 2 feet wide!',
    ],
    quizQuestion: {
      question: 'What can a dragonfly do that most insects cannot?',
      options: ['Swim', 'Fly backward and hover', 'Dig tunnels'],
      correctIndex: 1,
    },
  },
  {
    id: 'firefly',
    name: 'Firefly',
    emoji: '✨',
    color: '#ffb300',
    tagline: 'A magical bug that glows in the dark!',
    description:
      "Fireflies are special beetles that can make their own light! On warm summer nights, they flash their tiny lanterns to say hello to other fireflies. It's like nature's own light show!",
    habitat:
      'Fireflies live in warm, humid places like fields, forests, and near streams. They come out at dusk and fill the air with their twinkling lights. You can spot them on summer evenings!',
    diet: "Baby fireflies eat snails, slugs, and worms. Adult fireflies mostly drink nectar and pollen. Some adult fireflies don't eat at all — they just focus on finding a friend!",
    funFacts: [
      'Firefly light is the most efficient light in the world — it makes almost no heat!',
      'Each firefly species has its own special flash pattern.',
      'Firefly eggs can glow too!',
      'Fireflies are actually beetles, not flies!',
    ],
    quizQuestion: {
      question: 'Why do fireflies flash their lights?',
      options: ['To scare people', 'To say hello to other fireflies', 'To see in the dark'],
      correctIndex: 1,
    },
  },
  {
    id: 'spider',
    name: 'Spider',
    emoji: '🕷️',
    color: '#546e7a',
    tagline: 'A clever web-builder with eight legs!',
    description:
      "Spiders are amazing creatures with eight legs and the superpower of spinning silk! They build beautiful webs to catch their food. Most spiders are harmless and very shy — they're more scared of you than you are of them!",
    habitat:
      'Spiders live almost everywhere — in gardens, houses, forests, caves, and even deserts! They build webs in corners, between branches, and in grassy areas.',
    diet: "Spiders eat insects like flies, mosquitoes, and moths that get caught in their sticky webs. They help keep bug populations under control! Spiders are nature's pest control.",
    funFacts: [
      'Spider silk is stronger than steel of the same thickness!',
      'Most spiders have 8 eyes!',
      "Spiders can't eat solid food — they turn it into liquid first!",
      'There are over 45,000 different kinds of spiders in the world.',
    ],
    quizQuestion: {
      question: 'What is special about spider silk?',
      options: ["It's sticky and pink", "It's stronger than steel", 'It tastes like candy'],
      correctIndex: 1,
    },
  },
  {
    id: 'beetle',
    name: 'Beetle',
    emoji: '🪲',
    color: '#2e7d32',
    tagline: 'An armored bug with a shiny shell!',
    description:
      'Beetles are insects with hard, shiny wing covers that protect them like armor! They come in all sizes and amazing colors — shiny green, bright blue, golden, and even rainbow! Beetles are the biggest group of insects on Earth.',
    habitat:
      'Beetles live everywhere — in forests, deserts, gardens, ponds, and underground. Some live in trees, some in the soil, and some even live in water!',
    diet: "Different beetles eat different things. Some eat plants and wood, some eat other bugs, and some eat mushrooms. Dung beetles eat animal poop — it's their favorite meal!",
    funFacts: [
      'One out of every four animals on Earth is a beetle!',
      'Some beetles can glow in the dark, just like fireflies.',
      'The Hercules beetle can carry 850 times its own weight!',
      'Beetles have been around for over 230 million years.',
    ],
    quizQuestion: {
      question: "What protects a beetle's body?",
      options: ['Fur', 'Hard shiny wing covers', 'Slime'],
      correctIndex: 1,
    },
  },
  {
    id: 'grasshopper',
    name: 'Grasshopper',
    emoji: '🦗',
    color: '#558b2f',
    tagline: 'A jumping champion with long back legs!',
    description:
      "Grasshoppers are incredible jumpers! Their strong back legs can launch them 20 times their own body length. That's like you jumping from one end of a basketball court to the other in one leap!",
    habitat:
      'Grasshoppers live in grassy fields, meadows, and gardens. They love warm, sunny spots and hide among tall grass and plants. You can hear them chirping on summer days!',
    diet: 'Grasshoppers are plant eaters. They munch on grass, leaves, and crops. They use their strong jaws to chomp through tough plant material all day long.',
    funFacts: [
      'Grasshoppers make music by rubbing their legs against their wings!',
      'Grasshoppers have ears on their bellies!',
      'They can jump up to 20 times their own body length!',
      'Grasshoppers have been around for about 250 million years.',
    ],
    quizQuestion: {
      question: "Where are a grasshopper's ears?",
      options: ['On their head', 'On their belly', 'On their legs'],
      correctIndex: 1,
    },
  },
  {
    id: 'earthworm',
    name: 'Earthworm',
    emoji: '🪱',
    color: '#8d6e63',
    tagline: 'A wiggly gardener that makes soil healthy!',
    description:
      'Earthworms are long, wiggly creatures that live underground. They are super important for our planet! As they tunnel through the soil, they mix it up and make it healthy for plants to grow.',
    habitat:
      'Earthworms live in moist soil underground. They dig tunnels through the dirt, which helps air and water reach plant roots. You can find them in gardens, forests, and anywhere with soft, damp soil.',
    diet: 'Earthworms eat dead leaves, tiny bits of plants, and soil. As food passes through their bodies, they turn it into rich compost that helps plants grow big and strong!',
    funFacts: [
      'Earthworms have five hearts!',
      'A single acre of land can have over a million worms!',
      'Earthworms can eat their own body weight in food every day.',
      'Worms breathe through their skin!',
    ],
    quizQuestion: {
      question: 'How many hearts does an earthworm have?',
      options: ['One', 'Five', 'Ten'],
      correctIndex: 1,
    },
  },
  {
    id: 'praying-mantis',
    name: 'Praying Mantis',
    emoji: '🙏',
    color: '#689f38',
    tagline: "A patient hunter that looks like it's praying!",
    description:
      "The praying mantis is a fascinating insect that holds its front legs together as if it's praying. But those legs are actually built for catching food! The mantis is super patient — it stays perfectly still and waits for lunch to come close.",
    habitat:
      "Praying mantises live in gardens, meadows, and tropical forests. They hang out on plants and flowers, blending in with their green or brown color so they're hard to spot!",
    diet: 'Praying mantises eat other insects like flies, crickets, and moths. They are skilled hunters with lightning-fast reflexes. A mantis can catch its prey in the blink of an eye!',
    funFacts: [
      'A praying mantis can turn its head almost all the way around!',
      'Mantises are the only insects that can look over their shoulder.',
      'Baby mantises can catch fruit flies on the day they are born!',
      'Some mantises can change color to blend in with flowers.',
    ],
    quizQuestion: {
      question: 'What makes a praying mantis a good hunter?',
      options: [
        'It runs really fast',
        'It stays still and has lightning-fast reflexes',
        'It uses a web',
      ],
      correctIndex: 1,
    },
  },
  {
    id: 'cricket',
    name: 'Cricket',
    emoji: '🦟',
    color: '#795548',
    tagline: 'A tiny musician that sings at night!',
    description:
      'Crickets are small insects famous for the cheerful chirping sound they make on summer nights. Only male crickets chirp — they rub their wings together like a tiny violin to call for friends!',
    habitat:
      'Crickets live in fields, meadows, gardens, and sometimes inside houses. They like warm, dark spots and become most active at night. You can hear their chirping symphony on warm evenings!',
    diet: 'Crickets eat almost anything — plants, fruit, seeds, and even other small insects. They are omnivores, which means they eat both plants and animals.',
    funFacts: [
      'Crickets hear with their front legs — they have ears on their knees!',
      'The faster a cricket chirps, the warmer the temperature outside.',
      'Crickets are eaten as a crunchy snack in many countries around the world.',
      'A cricket can jump up to 30 times its own body length!',
    ],
    quizQuestion: {
      question: 'How do crickets make their chirping sound?',
      options: [
        'They clap their legs',
        'They rub their wings together',
        'They vibrate their belly',
      ],
      correctIndex: 1,
    },
  },
  {
    id: 'mosquito',
    name: 'Mosquito',
    emoji: '🦟',
    color: '#607d8b',
    tagline: 'A tiny flyer with a very loud buzz!',
    description:
      'Mosquitoes are tiny flying insects known for their high-pitched buzz. Only female mosquitoes bite — they need a tiny bit of blood to lay their eggs. Male mosquitoes are completely harmless and only drink flower nectar!',
    habitat:
      'Mosquitoes live near standing water like ponds, puddles, and marshes because they lay their eggs on the water surface. They are found on every continent except Antarctica!',
    diet: 'Male mosquitoes drink flower nectar, just like bees. Female mosquitoes drink nectar too, but also need a small amount of blood to produce their eggs.',
    funFacts: [
      'Mosquitoes find you by sniffing out the carbon dioxide you breathe out!',
      "A mosquito's wings beat about 600 times per second — that's the buzzing sound!",
      'Mosquitoes are attracted to dark colors and body heat.',
      'Dragonflies are one of the best natural predators of mosquitoes.',
    ],
    quizQuestion: {
      question: 'Which mosquitoes bite?',
      options: ['Only males', 'Only females', 'Both males and females'],
      correctIndex: 1,
    },
  },
  {
    id: 'cockroach',
    name: 'Cockroach',
    emoji: '🪳',
    color: '#4e342e',
    tagline: 'One of the toughest survivors on Earth!',
    description:
      'Cockroaches are ancient insects that have been around for over 300 million years — even before the dinosaurs! They are incredibly tough survivors. Despite their creepy reputation, most cockroaches live outdoors and are important recyclers in nature.',
    habitat:
      'Wild cockroaches live in forests, caves, and under logs and rocks. They love warm, dark, moist places. There are about 4,500 different species, but only a handful ever come indoors.',
    diet: 'Cockroaches eat almost anything — dead leaves, wood, fruit, and decaying plant matter. In nature they are important decomposers, breaking down rotting material and returning nutrients to the soil.',
    funFacts: [
      'Cockroaches have been on Earth for over 300 million years!',
      'They can hold their breath for up to 40 minutes.',
      'A cockroach can survive a week without its head!',
      'They can run up to 3 miles per hour — very fast for their size.',
    ],
    quizQuestion: {
      question: 'How long have cockroaches been on Earth?',
      options: ['10,000 years', '300 million years', '1 million years'],
      correctIndex: 1,
    },
  },
  {
    id: 'pill-bug',
    name: 'Pill Bug',
    emoji: '🔵',
    color: '#78909c',
    tagline: 'A roly-poly friend that curls into a ball!',
    description:
      "Pill bugs — also called roly-polies — are cute little creatures with armored plates on their backs. When they feel scared, they curl up into a perfect little ball! They're not actually insects — they're related to crabs and lobsters!",
    habitat:
      'Pill bugs live in dark, damp places like under rocks, logs, flower pots, and fallen leaves. They need moisture to breathe, so they love hiding in cool, wet spots in the garden.',
    diet: "Pill bugs eat dead plants, fallen leaves, and rotting wood. They help break down plant material and turn it back into soil nutrients. They're nature's tiny recyclers!",
    funFacts: [
      "Pill bugs are not insects — they're crustaceans, like crabs!",
      'They can drink water with their bottom as well as their mouth!',
      'Pill bugs have blue blood!',
      "A pill bug has seven pairs of legs — that's 14 legs total!",
    ],
    quizQuestion: {
      question: 'What are pill bugs related to?',
      options: ['Spiders', 'Crabs and lobsters', 'Butterflies'],
      correctIndex: 1,
    },
  },
];

export function getBugById(id: string): BugInfo | undefined {
  return bugs.find((bug) => bug.id === id);
}

export function getAdjacentBugs(id: string): {
  prev: BugInfo | undefined;
  next: BugInfo | undefined;
} {
  const index = bugs.findIndex((bug) => bug.id === id);
  return {
    prev: index > 0 ? bugs[index - 1] : undefined,
    next: index < bugs.length - 1 ? bugs[index + 1] : undefined,
  };
}
