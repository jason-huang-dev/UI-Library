import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ButtonProps } from "./Button.types";
import { Button } from "./Button";

type ButtonStoryArgs = ButtonProps & {
  customColor?: string;
  customHoverColor?: string;
  customTextColor?: string;
};

function getCustomColorSx(args: ButtonStoryArgs): SxProps<Theme> | undefined {
  const {
    customColor,
    customHoverColor,
    customTextColor,
    sx,
    variant
  } = args;

  if (!customColor) {
    return sx;
  }

  const hoverColor = customHoverColor || customColor;
  const textColor = customTextColor || "#ffffff";

  const customSx: SxProps<Theme> = {
    color: textColor,

    ...(variant === "contained" && {
      backgroundColor: customColor,
      borderColor: customColor,

      "&:hover": {
        backgroundColor: hoverColor,
        borderColor: hoverColor
      }
    }),

    ...(variant === "outlined" && {
      color: customColor,
      borderColor: customColor,

      "&:hover": {
        color: hoverColor,
        borderColor: hoverColor,
        backgroundColor: `${customColor}14`
      }
    }),

    ...(variant === "text" && {
      color: customColor,

      "&:hover": {
        color: hoverColor,
        backgroundColor: `${customColor}14`
      }
    })
  };

  if (!sx) {
    return customSx;
  }

  return Array.isArray(sx) ? [...sx, customSx] : [sx, customSx];
}

function renderButtonWithCustomColors(args: ButtonStoryArgs) {
  const {
    customColor,
    customHoverColor,
    customTextColor,
    ...buttonProps
  } = args;

  return (
    <Button
      {...buttonProps}
      sx={getCustomColorSx(args)}
    />
  );
}

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: false,
    customColor: "",
    customHoverColor: "",
    customTextColor: ""
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"]
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info"
      ]
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"]
    },
    disabled: {
      control: "boolean"
    },
    customColor: {
      control: "color",
      description:
        "Temporary one-off color preview. This does not modify the theme."
    },
    customHoverColor: {
      control: "color",
      description:
        "Temporary one-off hover color preview. Falls back to customColor."
    },
    customTextColor: {
      control: "color",
      description:
        "Temporary one-off text color preview. Defaults based on variant."
    },
    onClick: {
      action: "clicked"
    }
  },
  render: renderButtonWithCustomColors
} satisfies Meta<ButtonStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  args: {
    color: "primary",
    size: "medium",
    disabled: false
  },
  render: ({
    customColor,
    customHoverColor,
    customTextColor,
    ...args
  }) => (
    <Stack direction="row" spacing={2}>
      <Button
        {...args}
        variant="contained"
        sx={getCustomColorSx({
          ...args,
          variant: "contained",
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Contained
      </Button>

      <Button
        {...args}
        variant="outlined"
        sx={getCustomColorSx({
          ...args,
          variant: "outlined",
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Outlined
      </Button>

      <Button
        {...args}
        variant="text"
        sx={getCustomColorSx({
          ...args,
          variant: "text",
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Text
      </Button>
    </Stack>
  )
};

export const Colors: Story = {
  args: {
    variant: "contained",
    size: "medium",
    disabled: false
  },
  render: ({
    customColor,
    customHoverColor,
    customTextColor,
    ...args
  }) => (
    <Stack direction="row" spacing={2}>
      <Button
        {...args}
        color="primary"
        sx={getCustomColorSx({
          ...args,
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Primary
      </Button>

      <Button
        {...args}
        color="secondary"
        sx={getCustomColorSx({
          ...args,
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Secondary
      </Button>

      <Button
        {...args}
        color="success"
        sx={getCustomColorSx({
          ...args,
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Success
      </Button>

      <Button
        {...args}
        color="error"
        sx={getCustomColorSx({
          ...args,
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Error
      </Button>

      <Button
        {...args}
        color="warning"
        sx={getCustomColorSx({
          ...args,
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Warning
      </Button>

      <Button
        {...args}
        color="info"
        sx={getCustomColorSx({
          ...args,
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Info
      </Button>
    </Stack>
  )
};

export const Sizes: Story = {
  args: {
    variant: "contained",
    color: "primary",
    disabled: false
  },
  render: ({
    customColor,
    customHoverColor,
    customTextColor,
    ...args
  }) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button
        {...args}
        size="small"
        sx={getCustomColorSx({
          ...args,
          size: "small",
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Small
      </Button>

      <Button
        {...args}
        size="medium"
        sx={getCustomColorSx({
          ...args,
          size: "medium",
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Medium
      </Button>

      <Button
        {...args}
        size="large"
        sx={getCustomColorSx({
          ...args,
          size: "large",
          customColor,
          customHoverColor,
          customTextColor
        })}
      >
        Large
      </Button>
    </Stack>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};