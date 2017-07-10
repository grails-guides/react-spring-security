package demo

import grails.rest.Resource
import groovy.transform.CompileStatic

@CompileStatic
@Resource(uri = '/api/vehicle')
class Vehicle {

    String name

    Make make
    Model model

    static belongsTo = [driver: Driver]

    static constraints = {
    }
}
