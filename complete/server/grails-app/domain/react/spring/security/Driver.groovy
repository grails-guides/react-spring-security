package react.spring.security

import grails.rest.Resource

@Resource(uri = '/api/driver')
class Driver extends User {

    String name

    static hasMany = [ vehicles: Vehicle ]

    static constraints = {
        vehicles nullable: true
    }
}
