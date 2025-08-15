<script lang="ts">
  import type { Snippet } from 'svelte';
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes,
  } from 'svelte/elements';

  type Shape = 'lg' | 'default' | 'icon' | 'icon-lg';

  type Variant = 'primary' | 'secondary' | 'accent';

  type AnchorOnlyKeys = Exclude<
    keyof HTMLAnchorAttributes,
    keyof HTMLButtonAttributes
  >;

  type ButtonOnlyKeys = Exclude<
    keyof HTMLButtonAttributes,
    keyof HTMLAnchorAttributes
  >;

  type AnchorOrButtonAttributes =
    | (HTMLAnchorAttributes & { [K in ButtonOnlyKeys]?: never })
    | (HTMLButtonAttributes & { [K in AnchorOnlyKeys]?: never });

  type WrapperAttribute = {
    shape?: Shape;
    variant?: Variant;
    children: Snippet;
  } & AnchorOrButtonAttributes;

  let {
    shape = 'default',
    variant = 'primary',
    children,
    ...elementProps
  }: WrapperAttribute = $props();

  const SHAPE_CLASSES: Record<Shape, string> = {
    default: 'h-10 px-2',
    lg: 'h-12 px-8',
    icon: 'size-10',
    'icon-lg': 'size-12 md:size-14',
  };

  const VARIANT_CLASSES: Record<Variant, string> = {
    accent: 'text-accent-foreground bg-accent-background',
    primary: 'text-foreground bg-background',
    secondary: 'text-secondary-foreground bg-secondary-background',
  };

  const shapeClasses = $derived<string>(SHAPE_CLASSES[shape]);
  const variantClasses = $derived<string>(VARIANT_CLASSES[variant]);

  function isAnchorElement(
    props: typeof elementProps,
  ): props is typeof elementProps & { href: string } {
    return 'href' in props && props.href != null;
  }
</script>

{#if isAnchorElement(elementProps)}
  <a
    {...elementProps}
    class="{shapeClasses} {variantClasses} inline-flex -translate-0.5 cursor-pointer items-center justify-center gap-2 rounded border-3 border-border font-medium shadow-shadow transition-all hover:translate-0.5 hover:shadow-none disabled:pointer-events-none disabled:opacity-75 disabled:shadow-none"
  >
    {@render children()}
  </a>
{:else}
  <button
    {...elementProps as HTMLButtonAttributes}
    class="{shapeClasses} {variantClasses} inline-flex -translate-0.5 cursor-pointer items-center justify-center gap-2 rounded border-3 border-border font-medium shadow-shadow transition-all hover:translate-0.5 hover:shadow-none disabled:pointer-events-none disabled:opacity-75 disabled:shadow-none"
  >
    {@render children()}
  </button>
{/if}
