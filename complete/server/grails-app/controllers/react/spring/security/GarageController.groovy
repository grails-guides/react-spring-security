package react.spring.security

import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class GarageController {
    def index() { }
}
