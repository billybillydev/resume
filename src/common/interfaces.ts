export interface IHTMLClass {
  class?: string;
}

export interface IAlpineClickEvent {
  'x:on-click'?: string;
  '@click'?: string;
  'x-on:click.stop'?: string;
  '@click.stop'?: string;
  'x-on:click.outside'?: string;
  '@click.outside'?: string;
}

export interface IAlpineKeyupEvent {
  'x-on:keyup.shift'?: string;
  '@:keyup.shift'?: string;
  'x-on:keyup.shift.enter'?: string;
  'x-on:keyup.enter'?: string;
  'x-on:keyup.space'?: string;
  'x-on:keyup.ctrl'?: string;
  'x-on:keyup.cmd'?: string;
  'x-on:keyup.alt'?: string;
  'x-on:keyup.escape'?: string;
  'x-on:keyup.tab'?: string;
  'x-on:keyup.caps-lock'?: string;
  'x-on:keyup.equal'?: string;
  'x-on:keyup.slash'?: string;
  'x-on:keyup.period'?: string;
  'x-on:keyup.meta'?: string;
  'x-on:keyup.up'?: string;
  'x-on:keyup.down'?: string;
  'x-on:keyup.left'?: string;
  'x-on:keyup.right'?: string;
  'x-on:keyup.page-up'?: string;
  'x-on:keyup.page-down'?: string;
  '@keyup.shift.enter'?: string;
  '@keyup.enter'?: string;
  '@keyup.space'?: string;
  '@keyup.ctrl'?: string;
  '@keyup.cmd'?: string;
  '@keyup.alt'?: string;
  '@keyup.escape'?: string;
  '@keyup.tab'?: string;
  '@keyup.caps-lock'?: string;
  '@keyup.equal'?: string;
  '@keyup.slash'?: string;
  '@keyup.period'?: string;
  '@keyup.meta'?: string;
  '@keyup.up'?: string;
  '@keyup.down'?: string;
  '@keyup.left'?: string;
  '@keyup.right'?: string;
  '@keyup.page-up'?: string;
  '@keyup.page-down'?: string;
}

export interface IAlpineSubmitEvent {
  'x-on:submit'?: string;
  '@submit'?: string;
  'x-on:submit.prevent'?: string;
  '@submit.prevent'?: string;
}

export interface IAlpine
  extends IAlpineClickEvent,
    IAlpineKeyupEvent,
    IAlpineSubmitEvent {
  ':class'?: string;
  ':id'?: string;
  'x-ref'?: string;
  'x-data'?: string;
  'x-text'?: string;
  'x-for'?: string;
  'x-if'?: string;
  'x-init'?: string;
  'x-effect'?: string;
  'x-bind'?: string;
  'x-id'?: string;
  'x-model'?: string;
  'x-show'?: string;
  'x-modelable'?: string;
  'x-transition'?: string;
  'x-cloak'?: string;
  'x-teleport'?: string;
  'x-html'?: string;
  'x-ignore'?: string;
}
