package react.spring.security

import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_DRIVER'])
class GarageController {
    def index() { }
}
