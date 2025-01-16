# The Unwanted Person - Visual Novel Game Documentation

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Game Mechanics](#game-mechanics)
4. [Dialog System](#dialog-system)
5. [State Management](#state-management)
6. [Adding New Content](#adding-new-content)
7. [Technical Details](#technical-details)

## Overview

The Unwanted Person is a visual novel game built with React that follows a branching narrative system. The game tracks player choices through two main metrics: "Kesenangan" (Happiness) and "Pertemanan" (Friendship).

## Project Structure

```
src/
├── components/ # Reusable components
├── context/ # Game state management
├── pages/ # Game scenes and dialogs
│ ├── Day 1/
│ ├── Day 2/
│ ├── Day 3/
│ └── Day 4/
└── assets/ # Images, audio, etc.
```

## Game Mechanics

### Status System

- **Kesenangan (Happiness)**: Range 0-100
- **Pertemanan (Friendship)**: Range 0-100
- These values determine story branching and endings

### Path System

- **Positive Path**: Triggered when both Kesenangan & Pertemanan ≥ 63
- **Negative Path**: Triggered when either value < 63

## Dialog System

### Creating a New Dialog Scene

1. Create a new file in the appropriate day folder:

```javascript
const DialogX = () => {
  const {
    updateKesenangan,
    updatePertemanan,
    updateFeedback,
    pathCerita,
    kesenangan,
    pertemanan,
  } = useGameContext();
  // Dialog state setup
  const [dialog, setDialog] = useState(initialDialog);
  // Path determination
  useEffect(() => {
    pathCeritaFunc();
  }, []);
};
```

### Dialog Options Structure

```javascript
const options = [
  {
    text: "Dialog option text",
    action: handleOptionA,
    type: "positive", // or "negative" or "neutral"
  },
];
```

### Adding Response Handlers

```javascript
const handleOptionA = () => {
  updateKesenangan(value); // Add/subtract from happiness
  updatePertemanan(value); // Add/subtract from friendship
  updateFeedback("Player feedback message");
};
```

### Implementing Path-Specific Dialogs

```javascript
const positivePath = () => {
  return (
    <PageDialog
      NamaKarakter="Character Name"
      Dialog={dialog}
      gambarkarakter={["/path/to/image.png"]}
      opsi={dialogOptions}
      hari="Day X"
      background="/path/to/background.jpg"
      status={{ kesenangan, pertemanan }}
      onCompleteNavigate="/next/dialog/path"
    />
  );
};
```

## State Management

### GameContext Usage

```javascript
const GameProvider = ({ children }) => {
  const [kesenangan, setKesenangan] = useState(0);
  const [pertemanan, setPertemanan] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [pathCerita, setPathCerita] = useState(0);

  // Update functions
  const updateKesenangan = (value) => {
    setKesenangan((prev) => Math.max(0, Math.min(100, prev + value)));
  };
};
```

### Accessing Context in Components

```javascript
const { kesenangan, pertemanan, updateKesenangan } = useGameContext();
```

## Adding New Content

### 1. Creating a New Day

1. Create new folder in `src/pages/`
2. Add route configuration
3. Create dialog components

### 2. Adding New Dialog

1. Create dialog component file
2. Set up initial state and context
3. Define dialog options and handlers
4. Implement positive/negative paths
5. Add navigation logic

### 3. Adding Assets

- Place character images in `/public/DAY{X}/`
- Place backgrounds in `/public/DAY{X}/`
- Place audio in `/public/audio/`

### 4. Configuring Routes

```javascript
const day_routes = [
  {
    path: "/dayX",
    element: <DayX />,
    children: [
      {
        path: "dialog1",
        element: <Dialog1 />,
      },
    ],
  },
];
```

## Technical Details

### Component Properties

#### PageDialog Props

```javascript
PageDialog.propTypes = {
  NamaKarakter: String, // Character name
  Dialog: String, // Dialog text
  gambarkarakter: Array, // Character images
  opsi: Array, // Dialog options
  hari: String, // Current day
  background: String, // Background image
  status: Object, // Game status
  onCompleteNavigate: String, // Next route
};
```

### Status Bar Implementation

```javascript
<StatusBar kesenangan={kesenangan} pertemanan={pertemanan} />
```

### Audio Implementation

```javascript
<AudioPlayer src="/audio/bgm.mp3" />
```

### Feedback System

- Feedback messages appear after player choices
- Controlled through `updateFeedback` function
- Automatically disappears after set duration

### Navigation System

- Uses React Router for scene transitions
- Handles both linear and branching progression
- Maintains state between scenes

## Best Practices

1. Always initialize dialog state
2. Include console logs for debugging
3. Handle both positive and negative paths
4. Implement proper error handling
5. Test all dialog branches
6. Maintain consistent naming conventions
7. Document all changes

## Common Issues & Solutions

1. **Path Not Updating**: Ensure pathCeritaFunc is called in useEffect
2. **Dialog Not Showing**: Check dialog state initialization
3. **Images Not Loading**: Verify asset paths
4. **State Not Persisting**: Confirm context implementation
5. **Navigation Issues**: Check route configuration

## Contributing

1. Fork the repository
2. Create feature branch
3. Follow coding standards
4. Test thoroughly
5. Submit pull request

## Dependencies

- React
- React Router DOM
- React Circular Progressbar
- TypeIt React

```

This documentation provides a comprehensive guide for maintaining and extending the game. Let me know if you need any specific section explained in more detail!

```
