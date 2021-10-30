package com.uzabase

import com.nfeld.jsonpathkt.JsonPath
import com.nfeld.jsonpathkt.extension.read
import com.fasterxml.jackson.databind.JsonNode as JN

data class JsonNode(val json: JN) {
    companion object {
        fun of(json: String) = JsonPath.parse(json)?.let(::JsonNode) ?: throw RuntimeException()
    }

    inline fun <reified T : Any> get(path: String): T =
        json.read(path) ?: throw NotFoundJsonValueException(json.toString(), path)

    fun getFilteredList(arrayKeyJsonPath: String, filterKey: String, filterValue: String): List<Map<Any, Any>> =
        json.read<List<Map<Any, Any>>>(arrayKeyJsonPath)?.filter { it[filterKey] == filterValue }
            ?: throw NotFoundJsonValueException(json.toString(), arrayKeyJsonPath)
}
