// AUTO GENERATED BASED ON Kong 2.4.x, DO NOT EDIT
// Original source path: kong/pdk/log.lua


export default interface log {


    /**
    * kong.log.warn("something require attention")
    * kong.log.err("something failed: ", err)
    * kong.log.alert("something requires immediate action")
    * @param ...varargs all params will be concatenated and stringified before being sent to the log
    * @returns throws an error on invalid inputs.
    */
    alert(...varargs: any): Promise<null>;

    /**
    * kong.log.warn("something require attention")
    * kong.log.err("something failed: ", err)
    * kong.log.alert("something requires immediate action")
    * @param ...varargs all params will be concatenated and stringified before being sent to the log
    * @returns throws an error on invalid inputs.
    */
    crit(...varargs: any): Promise<null>;

    /**
    * kong.log.warn("something require attention")
    * kong.log.err("something failed: ", err)
    * kong.log.alert("something requires immediate action")
    * @param ...varargs all params will be concatenated and stringified before being sent to the log
    * @returns throws an error on invalid inputs.
    */
    debug(...varargs: any): Promise<null>;

    /**
    * kong.log.warn("something require attention")
    * kong.log.err("something failed: ", err)
    * kong.log.alert("something requires immediate action")
    * @param ...varargs all params will be concatenated and stringified before being sent to the log
    * @returns throws an error on invalid inputs.
    */
    err(...varargs: any): Promise<null>;

    /**
    * kong.log.warn("something require attention")
    * kong.log.err("something failed: ", err)
    * kong.log.alert("something requires immediate action")
    * @param ...varargs all params will be concatenated and stringified before being sent to the log
    * @returns throws an error on invalid inputs.
    */
    info(...varargs: any): Promise<null>;

    /**
    * kong.log.warn("something require attention")
    * kong.log.err("something failed: ", err)
    * kong.log.alert("something requires immediate action")
    * @param ...varargs all params will be concatenated and stringified before being sent to the log
    * @returns throws an error on invalid inputs.
    */
    notice(...varargs: any): Promise<null>;

    /**
    * 
    */
    serialize(): Promise<null>;

    /**
    * -- Adds a new value to the serialized table
    * kong.log.set_serialize_value("my_new_value", 1)
    * assert(kong.log.serialize().my_new_value == 1)
    * -- Value can be a table
    * kong.log.set_serialize_value("my", { new = { value = 2 } })
    * assert(kong.log.serialize().my.new.value == 2)
    * -- It is possible to change an existing serialized value
    * kong.log.set_serialize_value("my_new_value", 3)
    * assert(kong.log.serialize().my_new_value == 3)
    * -- Unset an existing value by setting it to nil
    * kong.log.set_serialize_value("my_new_value", nil)
    * assert(kong.log.serialize().my_new_value == nil)
    * -- Dots in the key are interpreted as table accesses
    * kong.log.set_serialize_value("my.new.value", 4)
    * assert(kong.log.serialize().my.new_value == 4)
    * @param key the name of the field.
    * @param value value to be set. When a table is used, its keys must be numbers, strings, booleans, and its values can be numbers, strings or other tables like itself, recursively.
    * @param options can contain two entries: options.mode can be `set` (the default, always sets), `add` (only add if entry does not already exist) and `replace` (only change value if it already exists).
    * @returns the request information table
    */
    setSerializeValue(key: string, value: any, options: Array<string | number> | object): Promise<Array<string | number> | object>;

    /**
    * kong.log.warn("something require attention")
    * kong.log.err("something failed: ", err)
    * kong.log.alert("something requires immediate action")
    * @param ...varargs all params will be concatenated and stringified before being sent to the log
    * @returns throws an error on invalid inputs.
    */
    warn(...varargs: any): Promise<null>;

}
