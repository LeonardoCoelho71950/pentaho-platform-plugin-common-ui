/*!
 * Copyright 2017 - 2018 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
  "pentaho/module!_",
  "pentaho/visual/action/Interaction"
], function(module, Interaction) {

  "use strict";

  /**
   * @name Positioned
   * @memberOf pentaho.visual.action.mixins
   * @class
   * @extends pentaho.visual.action.Interaction
   * @abstract
   *
   * @amd pentaho/visual/action/mixins/Positioned
   *
   * @classDesc The `visual.action.mixins.Positioned` class is a mixin class for visual actions
   * which are triggered at a specific user interface position.
   *
   * The position is given by the
   * [position]{@link pentaho.visual.action.mixins.Positioned#position} property.
   *
   * The mixin adds [spec.IPositioned]{@link pentaho.visual.action.mixins.spec.IPositioned}
   * to the specification of an action.
   *
   * @description This class was not designed to be constructed directly.
   * It was designed to be used as a **mixin**.
   * @constructor
   */

  return Interaction.extend(module.id, /** @lends pentaho.visual.action.mixins.Positioned# */{

    // @override
    _init: function(spec) {

      this.base(spec);

      this.position = spec && spec.position;
    },

    /**
     * Gets or sets the _position_ where the action took place, in screen coordinates.
     *
     * @type {pentaho.visual.spec.IPoint}
     */
    get position() {
      return this.__position;
    },

    set position(value) {
      this.__position = value || null;
    },

    // region serialization
    _fillSpec: function(spec) {

      this.base(spec);

      if(this.__position) {
        spec.position = {x: this.__position.x, y: this.__position.y};
      }
    }
    // endregion
  });
});
