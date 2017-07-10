package demo

import grails.compiler.GrailsCompileStatic
import grails.rest.Resource

@GrailsCompileStatic
@Resource(uri = '/api/driver')
class Driver {

    String name

    static hasMany = [ vehicles: Vehicle ]

    static constraints = {
        vehicles nullable: true
    }
}
