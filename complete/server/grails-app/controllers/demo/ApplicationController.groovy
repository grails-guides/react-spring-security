package demo

import grails.core.GrailsApplication
import grails.util.Environment
import grails.plugins.*
import groovy.transform.CompileStatic

@CompileStatic
class ApplicationController implements PluginManagerAware {

    GrailsApplication grailsApplication
    GrailsPluginManager pluginManager

    def index() {
        [grailsApplication: grailsApplication, pluginManager: pluginManager]
    }
}
