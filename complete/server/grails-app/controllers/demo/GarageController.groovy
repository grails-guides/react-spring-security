package demo

import grails.plugin.springsecurity.annotation.Secured
import groovy.transform.CompileStatic

@CompileStatic
@Secured(['ROLE_DRIVER'])
class GarageController {
    def index() { }
}
